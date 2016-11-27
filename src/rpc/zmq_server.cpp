// Copyright (c) 2016, The Monero Project
// 
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
// 
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
// 
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#include "zmq_server.h"
#include <boost/chrono/chrono.hpp>

namespace cryptonote
{

namespace rpc
{

ZmqServer::ZmqServer(RpcHandler& h) :
    handler(h),
    stop_signal(false),
    running(false),
    context(NUM_ZMQ_THREADS)
{
}

ZmqServer::~ZmqServer()
{
  for (zmq::socket_t* socket : sockets)
  {
    delete socket;
  }
}

void ZmqServer::serve()
{

  while (!stop_signal)
  {
    for (zmq::socket_t* socket : sockets)
    {
      zmq::message_t message;

      while (socket->recv(&message, ZMQ_DONTWAIT))
      {
        std::string message_string(reinterpret_cast<const char *>(message.data()), message.size());

        std::string response = handler.handle(message_string);

        zmq::message_t reply(response.size());
        memcpy((void *) reply.data(), response.c_str(), response.size());

        socket->send(reply);
      }

      boost::this_thread::sleep_for(boost::chrono::milliseconds(5));
    }
  }
}

bool ZmqServer::addIPCSocket(std::string address, std::string port)
{
  try
  {
    std::string addr_prefix("ipc://");

    zmq::socket_t* socket = new zmq::socket_t(context, ZMQ_REP);

    std::string bind_address = addr_prefix + address + std::string(":") + port;
    socket->bind(bind_address.c_str());
    sockets.push_back(socket);
  }
  catch (...)
  {
    return false;
  }
  return true;
}

bool ZmqServer::addTCPSocket(std::string address, std::string port)
{
  zmq::socket_t *new_socket;
  try
  {
    std::string addr_prefix("tcp://");

    new_socket = new zmq::socket_t(context, ZMQ_REP);

    std::string bind_address = addr_prefix + address + std::string(":") + port;
    new_socket->bind(bind_address.c_str());
    sockets.push_back(new_socket);
  }
  catch (...)
  {
    if (new_socket)
    {
      delete new_socket;
    }
    return false;
  }
  return true;
}

void ZmqServer::run()
{
  running = true;
  stop_signal = false;
  run_thread = boost::thread(boost::bind(&ZmqServer::serve, this));
}

void ZmqServer::stop()
{
  if (!running) return;

  stop_signal = true;

  run_thread.join();

  running = false;

  return;
}


}  // namespace cryptonote

}  // namespace rpc

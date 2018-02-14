<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Ogiltig måladress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="63"/>
        <source>Invalid payment ID. Short payment ID should only be used in an integrated address</source>
        <translation>Ogiltigt betalnings-ID. Kort betalnings-ID ska endast användas i en integrerad adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="70"/>
        <source>Invalid payment ID</source>
        <translation>Ogiltigt betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="77"/>
        <source>Integrated address and long payment id can&apos;t be used at the same time</source>
        <translation>Integrerad adress och långt betalnings-ID kan inte användas samtidigt</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="90"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Försöker spara transaktion till fil, men angiven fil finns redan. Avslutar för att inte riskera att skriva över någonting. Fil:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="97"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Det gick inte att skriva transaktioner till fil</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="115"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="118"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="122"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="127"/>
        <source>. Reason: </source>
        <translation>. Orsak: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="129"/>
        <source>Unknown exception: </source>
        <translation>Okänt undantag: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="132"/>
        <source>Unhandled exception</source>
        <translation>Ohanterat undantag</translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Detta är en granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Det gick inte att signera transaktionen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Begärd växel går inte till en betald adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Begärd växel är större än betalning till växeladressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>Växel går till mer än en adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>skickar %s till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>utan några mål</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s växel till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>ingen växel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min mixin %lu. %s</source>
        <translation type="vanished">Läste in %lu transaktioner, för %s, avgift %s, %s, %s, med minsta mixin %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1111"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>betalnings-ID har ogiltigt format. En 16- eller 64-teckens hex-sträng förväntades: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1121"/>
        <source>Failed to add short payment id: </source>
        <translation>Det gick inte att lägga till kort betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1154"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1257"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1157"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1260"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1160"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1263"/>
        <source>RPC error: </source>
        <translation>RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1300"/>
        <source>not enough outputs for specified ring size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1199"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1302"/>
        <source>found outputs to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1266"/>
        <source>failed to get random outputs to mix</source>
        <translation>det gick inte att hämta slumpmässiga utgångar att mixa</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1170"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1273"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>inte tillräckligt med pengar för överföring, endast tillgängligt %s, skickat belopp %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="474"/>
        <source>failed to parse address</source>
        <translation>det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="486"/>
        <source>failed to parse secret spend key</source>
        <translation>det gick inte att parsa hemlig spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="496"/>
        <source>No view key supplied, cancelled</source>
        <translation>Ingen visningsnyckel angiven, avbruten</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="503"/>
        <source>failed to parse secret view key</source>
        <translation>det gick inte att parsa hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="513"/>
        <source>failed to verify secret spend key</source>
        <translation>det gick inte att verifiera hemlig spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="518"/>
        <source>spend key does not match address</source>
        <translation>spendernyckel matchar inte adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="524"/>
        <source>failed to verify secret view key</source>
        <translation>det gick inte att verifiera hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="529"/>
        <source>view key does not match address</source>
        <translation>visningsnyckel matchar inte adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="548"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="773"/>
        <source>Failed to send import wallet request</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="919"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Det gick inte att läsa in osignerade transaktioner</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="940"/>
        <source>Failed to load transaction from file</source>
        <translation>Det gick inte att läsa in transaktion från fil</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="958"/>
        <source>Wallet is view only</source>
        <translation>Plånboken är endast för granskning</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="967"/>
        <source>failed to save file </source>
        <translation>det gick inte att spara fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="986"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="999"/>
        <source>Failed to import key images: </source>
        <translation>det gick inte att importera nyckelavbildningar: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1032"/>
        <source>Failed to get subaddress label: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1046"/>
        <source>Failed to set subaddress label: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1163"/>
        <source>failed to get random outputs to mix: %s</source>
        <translation>det gick inte att hitta slumpmässiga utgångar att mixa: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1179"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1282"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1188"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1291"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>ej tillräckligt med pengar för överföring, endast tillgängligt %s, transaktionsbelopp %s = %s + %s (avgift)</translation>
    </message>
    <message>
        <source>not enough outputs for specified mixin_count</source>
        <translation type="vanished">inte tillräckligt många utgångar för angiven mixin_count</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1199"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1302"/>
        <source>output amount</source>
        <translation>utgångens belopp</translation>
    </message>
    <message>
        <source>found outputs to mix</source>
        <translation type="vanished">hittade utgångar att mixa</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1204"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1307"/>
        <source>transaction was not constructed</source>
        <translation>transaktionen konstruerades inte</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1208"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1311"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1215"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1318"/>
        <source>one of destinations is zero</source>
        <translation>ett av målen är noll</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1218"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1321"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>det gick inte att hitta ett lämpligt sätt att dela upp transaktioner</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1221"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1324"/>
        <source>unknown transfer error: </source>
        <translation>okänt överföringsfel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1224"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1327"/>
        <source>internal error: </source>
        <translation>internt fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1227"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1330"/>
        <source>unexpected error: </source>
        <translation>oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1230"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1333"/>
        <source>unknown error</source>
        <translation>okänt fel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1411"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1440"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1493"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1524"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1555"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1578"/>
        <source>Failed to parse txid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1429"/>
        <source>no tx keys found for this txid</source>
        <translation type="unfinished">inga tx-nycklar kunde hittas för detta txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1449"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1459"/>
        <source>Failed to parse tx key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1469"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1501"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1532"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1620"/>
        <source>Failed to parse address</source>
        <translation type="unfinished">Det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1626"/>
        <source>Address must not be a subaddress</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1848"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>Genomsök efter spenderade kan endast användas med en betrodd daemon</translation>
    </message>
</context>
<context>
    <name>Monero::WalletManagerImpl</name>
    <message>
        <source>failed to parse txid</source>
        <translation type="vanished">det gick inte att parsa transaktions-id</translation>
    </message>
    <message>
        <source>failed to parse tx key</source>
        <translation type="vanished">det gick inte att parsa transaktionsnyckeln</translation>
    </message>
    <message>
        <source>failed to parse address</source>
        <translation type="vanished">det gick inte att parsa adressen</translation>
    </message>
    <message>
        <source>failed to get transaction from daemon</source>
        <translation type="vanished">det gick inte att hämta transaktion från daemon</translation>
    </message>
    <message>
        <source>failed to parse transaction from daemon</source>
        <translation type="vanished">det gick inte att parsa transaktion från daemonen</translation>
    </message>
    <message>
        <source>failed to validate transaction from daemon</source>
        <translation type="vanished">det gick inte att validera transaktion från daemon</translation>
    </message>
    <message>
        <source>failed to get the right transaction from daemon</source>
        <translation type="vanished">det gick inte att hämta rätt transaktion från daemonen</translation>
    </message>
    <message>
        <source>failed to generate key derivation from supplied parameters</source>
        <translation type="vanished">det gick inte att skapa nyckelhärledning från angivna parametrar</translation>
    </message>
    <message>
        <source>error: </source>
        <translation type="vanished">fel: </translation>
    </message>
    <message>
        <source>received</source>
        <translation type="vanished">mottaget</translation>
    </message>
    <message>
        <source>in txid</source>
        <translation type="vanished">i transaktions-id</translation>
    </message>
    <message>
        <source>received nothing in txid</source>
        <translation type="vanished">tog emot ingenting i transaktions-id</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="246"/>
        <source>Failed to parse address</source>
        <translation>Det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="253"/>
        <source>Failed to parse key</source>
        <translation>Det gick inte att parsa nyckeln</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="261"/>
        <source>failed to verify key</source>
        <translation>det gick inte att verifiera nyckeln</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="271"/>
        <source>key does not match address</source>
        <translation>nyckeln matchar inte adressen</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="57"/>
        <source>yes</source>
        <translation>ja</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="71"/>
        <source>no</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="40"/>
        <source>Specify ip to bind rpc server</source>
        <translation>Ange IP-adress för att binda till RPC-server</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="41"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Ange användarnamn[:lösenord] som krävs av RPC-servern</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="42"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Bekräftelsevärde för rpc-bind-ip är INTE ett lokalt (loopback) IP</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="43"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="70"/>
        <source>Invalid IP address given for --</source>
        <translation>Ogiltig IP-adress angiven för --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="78"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> tillåter inkommande okrypterade externa anslutningar. Överväg att använda SSH-tunnel eller SSL-proxy istället. Åsidosätt med --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Username specified with --</source>
        <translation>Användarnamn angivet med --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source> cannot be empty</source>
        <translation> kan inte vara tomt</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source> requires RFC server password --</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="478"/>
        <source>Commands: </source>
        <translation>Kommandon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3003"/>
        <source>failed to read wallet password</source>
        <translation>det gick inte att läsa lösenord för plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2694"/>
        <source>invalid password</source>
        <translation>ogiltigt lösenord</translation>
    </message>
    <message>
        <source>start_mining [&lt;number_of_threads&gt;] - Start mining in daemon</source>
        <translation type="vanished">start_mining [&lt;antal_trådar&gt;] - Starta brytning i daemonen</translation>
    </message>
    <message>
        <source>Stop mining in daemon</source>
        <translation type="vanished">Avbryt brytning i daemonen</translation>
    </message>
    <message>
        <source>Save current blockchain data</source>
        <translation type="vanished">Spara aktuella blockkedje-data</translation>
    </message>
    <message>
        <source>Show current wallet balance</source>
        <translation type="vanished">Visa aktuellt saldo för plånboken</translation>
    </message>
    <message>
        <source>Show blockchain height</source>
        <translation type="vanished">Visa blockkedjans höjd</translation>
    </message>
    <message>
        <source>Show current wallet public address</source>
        <translation type="vanished">Visa plånbokens aktuella öppna adress</translation>
    </message>
    <message>
        <source>Show this help</source>
        <translation type="vanished">Visa denna hjälp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1900"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed: behöver ett argument. tillgängliga alternativ: språk</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1928"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set: okända argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2864"/>
        <source>wallet file path not valid: </source>
        <translation>ogiltig sökväg till plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1982"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Försöker skapa eller återställa plånbok, men angivna filer existerar.  Avslutar för att inte riskera att skriva över någonting.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661"/>
        <source>usage: payment_id</source>
        <translation>användning: payment_id</translation>
    </message>
    <message>
        <source>sweep_below &lt;amount_threshold&gt; [mixin] address [payment_id] - Send all unlocked outputs below the threshold to an address</source>
        <translation type="vanished">sweep_below &lt;tröskelbelopp&gt; [mixin] &lt;adress&gt; [&lt;betalnings_ID&gt;] - Skicka alla upplåsta utgångar under tröskelbeloppet till en adress</translation>
    </message>
    <message>
        <source>Generate a new random full size payment id - these will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids</source>
        <translation type="vanished">Skapa ett nytt slumpmässigt betalnings-ID av full storlek - dessa kommer att vara okrypterade på blockkedjan, se integrated_address för krypterade korta betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1886"/>
        <source>needs an argument</source>
        <translation>kräver ett argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1909"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1910"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1911"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1913"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1916"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1917"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1922"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1924"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1926"/>
        <source>0 or 1</source>
        <translation>0 eller 1</translation>
    </message>
    <message>
        <source>integer &gt;= 2</source>
        <translation type="vanished">heltal &gt;= 2</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1915"/>
        <source>0, 1, 2, 3, or 4</source>
        <translation>0, 1, 2, 3 eller 4</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1919"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1923"/>
        <source>unsigned integer</source>
        <translation>positivt heltal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2036"/>
        <source>NOTE: the following 25 words can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>OBSERVERA: följande 25 ord kan användas för att återfå tillgång till din plånbok. Skriv ner och spara dem på ett säkert ställe. Spara dem inte i din e-post eller på något lagringsutrymme som du inte har direkt kontroll över.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2087"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet använder --generate-new-wallet, inte --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2116"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>ange en återställningsparameter med --electrum-seed=&quot;ordlista här&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2466"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>ange sökväg till en plånbok med --generate-new-wallet (inte --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2630"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>plånboken kunde inte ansluta till daemonen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2638"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Daemonen använder en högre version av RPC (%u) än plånboken (%u): %s. Antingen uppdatera en av dem, eller använd --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2657"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Lista över tillgängliga språk för din plånboks frö:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2666"/>
        <source>Enter the number corresponding to the language of your choice: </source>
        <translation>Ange det tal som motsvarar det språk du vill använda: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2732"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Använd det nya frö som vi tillhandahåller.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2746"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2804"/>
        <source>Generated new wallet: </source>
        <translation>Ny plånbok skapad: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2752"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2809"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2853"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2882"/>
        <source>Opened watch-only wallet</source>
        <translation>Öppnade plånbok för granskning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2886"/>
        <source>Opened wallet</source>
        <translation>Öppnade plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2896"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Fortsätt för att uppgradera din plånbok.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2911"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Plånbokens filformat kommer nu att uppgraderas.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2919"/>
        <source>failed to load wallet: </source>
        <translation>det gick inte att läsa in plånboken: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2936"/>
        <source>Use the &quot;help&quot; command to see the list of available commands.
</source>
        <translation>Använd kommandot &quot;help&quot; för att se en lista över tillgängliga kommandon.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2981"/>
        <source>Wallet data saved</source>
        <translation>Plånboksdata sparades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3067"/>
        <source>Mining started in daemon</source>
        <translation>Brytning startad i daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3069"/>
        <source>mining has NOT been started: </source>
        <translation>brytning har INTE startats: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3088"/>
        <source>Mining stopped in daemon</source>
        <translation>Brytning stoppad i daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3090"/>
        <source>mining has NOT been stopped: </source>
        <translation>brytning har INTE stoppats: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145"/>
        <source>Blockchain saved</source>
        <translation>Blockkedjan sparad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3160"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3191"/>
        <source>Height </source>
        <translation>Höjd </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3192"/>
        <source>transaction </source>
        <translation>transaktion </translation>
    </message>
    <message>
        <source>received </source>
        <translation type="vanished">mottaget </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3180"/>
        <source>spent </source>
        <translation>spenderad </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3193"/>
        <source>unsupported transaction format</source>
        <translation>transaktionsformatet stöds inte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214"/>
        <source>Starting refresh...</source>
        <translation>Startar uppdatering …</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227"/>
        <source>Refresh done, blocks received: </source>
        <translation>Uppdatering färdig, mottagna block: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3753"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4225"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>betalnings-ID har ogiltigt format. En 16- eller 64-teckens hex-sträng förväntades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3768"/>
        <source>bad locked_blocks parameter:</source>
        <translation>dålig parameter för locked_blocks:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3796"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4243"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4457"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>en enstaka transaktion kan inte använda mer än ett betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3805"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4252"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4425"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4465"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>det gick inte att upprätta betalnings-ID, trots att det avkodades korrekt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3830"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3911"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3982"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4091"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4266"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4324"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4479"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4522"/>
        <source>transaction cancelled.</source>
        <translation>transaktion avbröts.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3890"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3900"/>
        <source>Is this okay anyway?  (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3895"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?  (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3900"/>
        <source>Failed to check for backlog: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3941"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4297"/>
        <source>
Transaction </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3946"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4302"/>
        <source>Spending from address index %d
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3948"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4304"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3950"/>
        <source>Sending %s.  </source>
        <translation>Skickar %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3953"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Transaktionen behöver delas upp i %llu transaktioner.  Detta kommer att göra att en transaktionsavgift läggs till varje transaktion, med ett totalt belopp på %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3959"/>
        <source>The transaction fee is %s</source>
        <translation>Transaktionsavgiften är %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3962"/>
        <source>, of which %s is dust from change</source>
        <translation>, varav %s är damm från växel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3963"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3963"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Ett total belopp på %s från växeldamm kommer att skickas till damm-adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3968"/>
        <source>.
This transaction will unlock on block %llu, in approximately %s days (assuming 2 minutes per block)</source>
        <translation>.
Denna transaktion kommer att låsas upp vid block %llu, om ungefär %s dagar (förutsatt en blocktid på 2 minuter)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3994"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4006"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4335"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4347"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4532"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4544"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Det gick inte att skriva transaktioner till fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4010"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4106"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4118"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4339"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4351"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4548"/>
        <source>Unsigned transaction(s) successfully written to file: </source>
        <translation>Osignerade transaktioner skrevs till fil: </translation>
    </message>
    <message>
        <source>Not enough money in unlocked balance</source>
        <translation type="vanished">Inte tillräckligt med pengar i upplåst saldo</translation>
    </message>
    <message>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation type="vanished">Det gick inte att hitta något sätt att skapa transaktioner. Detta beror vanligtvis på damm som är så litet att det inte kan betala för sig självt i avgifter, eller ett försök att skicka mer pengar än upplåst saldo, eller att inte lämna tillräckligt för att täcka avgifterna</translation>
    </message>
    <message>
        <source>Reason: </source>
        <translation type="vanished">Orsak: </translation>
    </message>
    <message>
        <source>failed to find a suitable way to split transactions</source>
        <translation type="vanished">det gick inte att hitta ett lämpligt sätt att dela upp transaktioner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4061"/>
        <source>No unmixable outputs found</source>
        <translation>Inga omixbara utgångar kunde hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4144"/>
        <source>No address given</source>
        <translation>Ingen adress har angivits</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4419"/>
        <source>failed to parse Payment ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4435"/>
        <source>usage: sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4442"/>
        <source>failed to parse key image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4494"/>
        <source>No outputs found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4499"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4504"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4581"/>
        <source>missing amount threshold</source>
        <translation>beloppströskel saknas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4586"/>
        <source>invalid amount threshold</source>
        <translation>ogiltig beloppströskel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4596"/>
        <source>donations are not enabled on the testnet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603"/>
        <source>usage: donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4697"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Begärd växel går inte till en betald adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4702"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Begärd växel är större än betalning till växeladressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4733"/>
        <source>sending %s to %s</source>
        <translation>skickar %s till %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4743"/>
        <source> dummy output(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4746"/>
        <source>with no destinations</source>
        <translation>utan några mål</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4758"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay? (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4792"/>
        <source>usage: sign_transfer [export]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4804"/>
        <source>Failed to sign transaction</source>
        <translation>Det gick inte att signera transaktionen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4810"/>
        <source>Failed to sign transaction: </source>
        <translation>Det gick inte att signera transaktion: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4831"/>
        <source>Transaction raw hex data exported to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4847"/>
        <source>Failed to load transaction from file</source>
        <translation>Det gick inte att läsa in transaktion från fil</translation>
    </message>
    <message>
        <source>daemon is busy. Please try later</source>
        <translation type="vanished">daemonen är upptagen. Försök senare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3243"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3546"/>
        <source>RPC error: </source>
        <translation>RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="521"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>plånboken är enbart för granskning och har ingen spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="635"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="779"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="843"/>
        <source>Your original password was incorrect.</source>
        <translation>Ditt ursprungliga lösenord var fel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="649"/>
        <source>Error with wallet rewrite: </source>
        <translation>Fel vid återskrivning av plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1284"/>
        <source>priority must be 0, 1, 2, 3, or 4 </source>
        <translation>prioritet måste vara 0, 1, 2, 3 eller 4 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1296"/>
        <source>priority must be 0, 1, 2, 3,or 4</source>
        <translation>prioritet måste vara 0, 1, 2, 3 eller 4</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1311"/>
        <source>priority must be 0, 1, 2 3,or 4</source>
        <translation>prioritet måste vara 0, 1, 2, 3 eller 4</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1399"/>
        <source>invalid unit</source>
        <translation>ogiltig enhet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1479"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>ogiltigt värde för count: måste vara ett heltal utan tecken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1435"/>
        <source>invalid value</source>
        <translation>ogiltigt värde</translation>
    </message>
    <message>
        <source>Same as transfer, but using an older transaction building algorithm</source>
        <translation type="vanished">Samma som transfer, men använder en äldre algoritm för att bygga transaktionen</translation>
    </message>
    <message>
        <source>sweep_all [mixin] address [payment_id] - Send all unlocked balance to an address</source>
        <translation type="vanished">sweep_all [mixin] adress [betalnings_id] - Skicka allt upplåst saldo till en adress</translation>
    </message>
    <message>
        <source>donate [&lt;mixin_count&gt;] &lt;amount&gt; [payment_id] - Donate &lt;amount&gt; to the development team (donate.getmonero.org)</source>
        <translation type="vanished">donate [&lt;mixin_antal&gt;] &lt;belopp&gt; [&lt;betalnings_id&gt;] - Donera &lt;belopp&gt; till utvecklingsteamet (donate.getmonero.org)</translation>
    </message>
    <message>
        <source>set_log &lt;level&gt;|&lt;categories&gt; - Change current log detail (level must be &lt;0-4&gt;)</source>
        <translation type="vanished">set_log &lt;nivå&gt;|&lt;kategorier&gt; - Ändra detaljnivån för aktuell logg (nivå måste vara 0-4)</translation>
    </message>
    <message>
        <source>address_book [(add (&lt;address&gt; [pid &lt;long or short payment id&gt;])|&lt;integrated address&gt; [&lt;description possibly with whitespaces&gt;])|(delete &lt;index&gt;)] - Print all entries in the address book, optionally adding/deleting an entry to/from it</source>
        <translation type="vanished">address_book [(add (&lt;adress&gt; [pid &lt;långt eller kort betalnings-ID&gt;])|&lt;integrerad adress&gt; [&lt;beskrivning eventuellt med blanktecken&gt;])|(delete &lt;index&gt;)] - Skriv ut alla poster i adressboken, eventuellt lägg till/ta bort en post till/från den</translation>
    </message>
    <message>
        <source>show_transfers [in|out|pending|failed|pool] [&lt;min_height&gt; [&lt;max_height&gt;]] - Show incoming/outgoing transfers within an optional height range</source>
        <translation type="vanished">show_transfers [in|out|pending|failed|pool] [&lt;min_höjd&gt; [&lt;max_höjd&gt;]] - Visa inkommande/utgående överföringar inom ett valfritt höjdintervall</translation>
    </message>
    <message>
        <source>Show information about a transfer to/from this address</source>
        <translation type="vanished">Visa information om en överföring till/från denna adress</translation>
    </message>
    <message>
        <source>Change wallet password</source>
        <translation type="vanished">Ändra lösenord för plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1937"/>
        <source>usage: set_log &lt;log_level_number_0-4&gt; | &lt;categories&gt;</source>
        <translation>användning: set_log &lt;loggnivå_nummer_0-4&gt; | &lt;kategorier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2008"/>
        <source>(Y/Yes/N/No): </source>
        <translation>(J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2504"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2531"/>
        <source>bad m_restore_height parameter: </source>
        <translation>dålig parameter för m_restore_height: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2509"/>
        <source>date format must be YYYY-MM-DD</source>
        <translation>datumformat måste vara ÅÅÅÅ-MM-DD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2522"/>
        <source>Restore height is: </source>
        <translation>Återställningshöjd är: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2523"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3975"/>
        <source>Is this okay?  (Y/Yes/N/No): </source>
        <translation>Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2570"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemonen är lokal, utgår från att den är betrodd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2999"/>
        <source>Password for new watch-only wallet</source>
        <translation>Lösenord för ny granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3058"/>
        <source>invalid arguments. Please use start_mining [&lt;number_of_threads&gt;] [do_bg_mining] [ignore_battery], &lt;number_of_threads&gt; should be from 1 to </source>
        <translation>ogiltiga argument. Använd start_mining [&lt;antal_trådar&gt;] [do_bg_mining] [ignore_battery], &lt;antal_trådar&gt; ska vara från 1 till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3253"/>
        <source>internal error: </source>
        <translation>internt fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3258"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3551"/>
        <source>unexpected error: </source>
        <translation>oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1185"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3556"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4133"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4366"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4860"/>
        <source>unknown error</source>
        <translation>okänt fel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3268"/>
        <source>refresh failed: </source>
        <translation>det gick inte att att uppdatera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3268"/>
        <source>Blocks received: </source>
        <translation>Mottagna block: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3299"/>
        <source>unlocked balance: </source>
        <translation>upplåst saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1920"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <source>amount</source>
        <translation>belopp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="219"/>
        <source>false</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="492"/>
        <source>Unknown command: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="499"/>
        <source>Command usage: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="502"/>
        <source>Command description: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="550"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="566"/>
        <source>Enter optional seed encryption passphrase, empty to see raw seed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="583"/>
        <source>Failed to retrieve seed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="602"/>
        <source>wallet is multisig and has no seed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="673"/>
        <source>Cannot connect to daemon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>Current fee is %s monero per kB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699"/>
        <source>Error: bad estimated backlog array size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="711"/>
        <source> (current)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="716"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="719"/>
        <source>No backlog at priority </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="728"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="761"/>
        <source>This wallet is already multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="733"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="766"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="739"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="772"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="746"/>
        <source>Your password is incorrect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="752"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="753"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="785"/>
        <source>usage: make_multisig &lt;threshold&gt; &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="793"/>
        <source>Invalid threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="806"/>
        <source>Another step is needed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="808"/>
        <source>Send this multisig info to all other participants, then use finalize_multisig &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="814"/>
        <source>Error creating multisig: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="820"/>
        <source> multisig address: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="831"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="875"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="922"/>
        <source>This wallet is not multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="836"/>
        <source>This wallet is already finalized</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="849"/>
        <source>usage: finalize_multisig &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="857"/>
        <source>Failed to finalize multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="863"/>
        <source>Failed to finalize multisig: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="880"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="927"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1001"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1069"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1131"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="885"/>
        <source>usage: export_multisig_info &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="908"/>
        <source>Error exporting multisig info: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="912"/>
        <source>Multisig info exported to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="932"/>
        <source>usage: import_multisig_info &lt;filename1&gt; [&lt;filename2&gt;...] - one for each other participant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="960"/>
        <source>Multisig info imported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="964"/>
        <source>Failed to import multisig info: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="980"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="996"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1064"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126"/>
        <source>This is not a multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1006"/>
        <source>usage: sign_multisig &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1019"/>
        <source>Failed to sign multisig transaction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1025"/>
        <source>Multisig error: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1030"/>
        <source>Failed to sign multisig transaction: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1053"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074"/>
        <source>usage: submit_multisig &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1150"/>
        <source>Failed to load multisig transaction from file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1155"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1103"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6745"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1104"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6746"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1136"/>
        <source>usage: export_raw_multisig &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1171"/>
        <source>Failed to export multisig transaction to file </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1175"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1253"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1267"/>
        <source>ring size must be an integer &gt;= </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1272"/>
        <source>could not change default ring size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1513"/>
        <source>Invalid height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1559"/>
        <source>start_mining [&lt;number_of_threads&gt;] [bg_mining] [ignore_battery]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1560"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1563"/>
        <source>Stop mining in the daemon.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1566"/>
        <source>set_daemon &lt;host&gt;[:&lt;port&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1567"/>
        <source>Set another daemon to connect to.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1570"/>
        <source>Save the current blockchain data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1573"/>
        <source>Synchronize the transactions and balance.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576"/>
        <source>balance [detail]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1577"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1580"/>
        <source>incoming_transfers [available|unavailable] [verbose] [index=&lt;N1&gt;[,&lt;N2&gt;[,...]]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1581"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1584"/>
        <source>payments &lt;PID_1&gt; [&lt;PID_2&gt; ... &lt;PID_N&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1585"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1588"/>
        <source>Show the blockchain height.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1591"/>
        <source>transfer_original [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1592"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; using an older transaction building algorithm. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the fee of the transaction. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1594"/>
        <source>transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1595"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the fee of the transaction. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1598"/>
        <source>locked_transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;addr&gt; &lt;amount&gt; &lt;lockblocks&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the fee of the transaction. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1602"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1604"/>
        <source>sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1605"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608"/>
        <source>sweep_below &lt;amount_threshold&gt; [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1609"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1612"/>
        <source>sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1613"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1616"/>
        <source>donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1617"/>
        <source>Donate &lt;amount&gt; to the development team (donate.getmonero.org).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1620"/>
        <source>sign_transfer &lt;file&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1621"/>
        <source>Sign a transaction from a &lt;file&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624"/>
        <source>Submit a signed transaction from a file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1627"/>
        <source>set_log &lt;level&gt;|{+,-,}&lt;categories&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1628"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1631"/>
        <source>account
  account new &lt;label text with white spaces allowed&gt;
  account switch &lt;index&gt; 
  account label &lt;index&gt; &lt;label text with white spaces allowed&gt;
  account tag &lt;tag_name&gt; &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account untag &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account tag_description &lt;tag_name&gt; &lt;description&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1638"/>
        <source>If no arguments are specified, the wallet shows all the existing accounts along with their balances.
If the &quot;new&quot; argument is specified, the wallet creates a new account with its label initialized by the provided label text (which can be empty).
If the &quot;switch&quot; argument is specified, the wallet switches to the account specified by &lt;index&gt;.
If the &quot;label&quot; argument is specified, the wallet sets the label of the account specified by &lt;index&gt; to the provided label text.
If the &quot;tag&quot; argument is specified, a tag &lt;tag_name&gt; is assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
If the &quot;untag&quot; argument is specified, the tags assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., are removed.
If the &quot;tag_description&quot; argument is specified, the tag &lt;tag_name&gt; is assigned an arbitrary text &lt;description&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1647"/>
        <source>address [ new &lt;label text with white spaces allowed&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;label text with white spaces allowed&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1648"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the walllet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1651"/>
        <source>integrated_address [&lt;payment_id&gt; | &lt;address&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1652"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1655"/>
        <source>address_book [(add ((&lt;address&gt; [pid &lt;id&gt;])|&lt;integrated address&gt;) [&lt;description possibly with whitespaces&gt;])|(delete &lt;index&gt;)]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1656"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1659"/>
        <source>Save the wallet data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1662"/>
        <source>Save a watch-only keys file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1665"/>
        <source>Display the private view key.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1668"/>
        <source>Display the private spend key.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1671"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1674"/>
        <source>set &lt;option&gt; [&lt;value&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1675"/>
        <source>Available options:
 seed language
   Set the wallet&apos;s seed language.
 always-confirm-transfers &lt;1|0&gt;
   Whether to confirm unsplit txes.
 print-ring-members &lt;1|0&gt;
   Whether to print detailed information about ring members during confirmation.
 store-tx-info &lt;1|0&gt;
   Whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference.
 default-ring-size &lt;n&gt;
   Set the default ring size (default and minimum is 5).
 auto-refresh &lt;1|0&gt;
   Whether to automatically synchronize new blocks from the daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Set the wallet&apos;s refresh behaviour.
 priority [0|1|2|3|4]
   Set the fee too default/unimportant/normal/elevated/priority.
 confirm-missing-payment-id &lt;1|0&gt;
 ask-password &lt;1|0&gt;
 unit &lt;monero|millinero|micronero|nanonero|piconero&gt;
   Set the default monero (sub-)unit.
 min-outputs-count [n]
   Try to keep at least that many outputs of value at least min-outputs-value.
 min-outputs-value [n]
   Try to keep at least min-outputs-count outputs of at least that value.
 merge-destinations &lt;1|0&gt;
   Whether to merge multiple payments to the same destination address.
 confirm-backlog &lt;1|0&gt;
   Whether to warn if there is transaction backlog.
 confirm-backlog-threshold [n]
   Set a threshold for confirm-backlog to only warn if the transaction backlog is greater than n blocks.
 refresh-from-block-height [n]
   Set the height before which to ignore blocks.
 auto-low-priority &lt;1|0&gt;
   Whether to automatically use the low priority fee level when it&apos;s safe to do so.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1712"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1715"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1718"/>
        <source>get_tx_key &lt;txid&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1719"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1722"/>
        <source>check_tx_key &lt;txid&gt; &lt;txkey&gt; &lt;address&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1723"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1726"/>
        <source>get_tx_proof &lt;txid&gt; &lt;address&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1727"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1730"/>
        <source>check_tx_proof &lt;txid&gt; &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1731"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1734"/>
        <source>get_spend_proof &lt;txid&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1735"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738"/>
        <source>check_spend_proof &lt;txid&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1739"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1742"/>
        <source>get_reserve_proof (all|&lt;amount&gt;) [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1743"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1748"/>
        <source>check_reserve_proof &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1749"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1752"/>
        <source>show_transfers [in|out|pending|failed|pool] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1753"/>
        <source>Show the incoming/outgoing transfers within an optional height range.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1756"/>
        <source>unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_amount&gt; [&lt;max_amount&gt;]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1757"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1760"/>
        <source>Rescan the blockchain from scratch.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1763"/>
        <source>set_tx_note &lt;txid&gt; [free text note]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1764"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1767"/>
        <source>get_tx_note &lt;txid&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1768"/>
        <source>Get a string note for a txid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1771"/>
        <source>set_description [free text note]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1772"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1775"/>
        <source>Get the description of the wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1778"/>
        <source>Show the wallet&apos;s status.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1781"/>
        <source>Show the wallet&apos;s information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1784"/>
        <source>sign &lt;file&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1785"/>
        <source>Sign the contents of a file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1788"/>
        <source>verify &lt;filename&gt; &lt;address&gt; &lt;signature&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1789"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1792"/>
        <source>export_key_images &lt;file&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1793"/>
        <source>Export a signed set of key images to a &lt;file&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1796"/>
        <source>import_key_images &lt;file&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1797"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1800"/>
        <source>export_outputs &lt;file&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1801"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1804"/>
        <source>import_outputs &lt;file&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1805"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1808"/>
        <source>show_transfer &lt;txid&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1809"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1812"/>
        <source>Change the wallet&apos;s password.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815"/>
        <source>Generate a new random full size payment id. These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1818"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1820"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1822"/>
        <source>make_multisig &lt;threshold&gt; &lt;string1&gt; [&lt;string&gt;...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1823"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1826"/>
        <source>finalize_multisig &lt;string&gt; [&lt;string&gt;...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1827"/>
        <source>Turn this wallet into a multisig wallet, extra step for N-1/N wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1830"/>
        <source>export_multisig_info &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1831"/>
        <source>Export multisig info for other participants</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1834"/>
        <source>import_multisig_info &lt;filename&gt; [&lt;filename&gt;...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1835"/>
        <source>Import multisig info from other participants</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1838"/>
        <source>sign_multisig &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1839"/>
        <source>Sign a multisig transaction from a file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1842"/>
        <source>submit_multisig &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1843"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1846"/>
        <source>export_raw_multisig_tx &lt;filename&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1847"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1850"/>
        <source>help [&lt;command&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1851"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1912"/>
        <source>integer &gt;= </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1925"/>
        <source>block height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2007"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2063"/>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot; and --generate-from-json=&quot;jsonfilename&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2079"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2085"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2101"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2128"/>
        <source>Multisig seed failed verification</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2144"/>
        <source>Enter seed encryption passphrase, empty if none</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2254"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332"/>
        <source>Error: expected M/N, but got: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2337"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2345"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2374"/>
        <source>failed to parse secret view key</source>
        <translation type="unfinished">det gick inte att parsa hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2383"/>
        <source>failed to verify secret view key</source>
        <translation type="unfinished">det gick inte att verifiera hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2403"/>
        <source>Secret spend key (%u of %u):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2427"/>
        <source>Error: M/N is currently unsupported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2545"/>
        <source>Restore height </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2546"/>
        <source>Still apply restore height?  (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2577"/>
        <source>Warning: using an untrusted daemon at %s, privacy will be lessened</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2631"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2763"/>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see the list of available commands.
Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
Always use the &quot;exit&quot; command when closing monero-wallet-cli to save 
your current session&apos;s state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2845"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2848"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2884"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2937"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2995"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100"/>
        <source>missing daemon URL argument</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3111"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3125"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3161"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3179"/>
        <source>txid </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3163"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3181"/>
        <source>idx </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3294"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3295"/>
        <source>Currently selected account: [</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3295"/>
        <source>] </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3297"/>
        <source>Tag: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3297"/>
        <source>(No tag assigned)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3304"/>
        <source>Balance per address:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3305"/>
        <source>Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3305"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5916"/>
        <source>Balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3305"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5916"/>
        <source>Unlocked balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3305"/>
        <source>Outputs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3305"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5916"/>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3313"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3322"/>
        <source>usage: balance [detail]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3334"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3376"/>
        <source>usage: incoming_transfers [available|unavailable] [verbose] [index=&lt;N&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>spent</source>
        <translation>spenderad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>global index</source>
        <translation>globalt index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>tx id</source>
        <translation>tx-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <source>addr index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>No incoming transfers</source>
        <translation>Inga inkommande överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422"/>
        <source>No incoming available transfers</source>
        <translation>Inga inkommande tillgängliga överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426"/>
        <source>No incoming unavailable transfers</source>
        <translation>Inga inkommande otillgängliga överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3437"/>
        <source>expected at least one payment_id</source>
        <translation>åtminstone ett payment_id förväntades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <source>payment</source>
        <translation>betalning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <source>transaction</source>
        <translation>transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <source>height</source>
        <translation>höjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <source>unlock time</source>
        <translation>upplåsningstid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3458"/>
        <source>No payments with id </source>
        <translation>Inga betalningar med ID </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3511"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3577"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3848"/>
        <source>failed to get blockchain height: </source>
        <translation>det gick inte att hämta blockkedjans höjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3567"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5169"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5221"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5254"/>
        <source>failed to connect to the daemon</source>
        <translation>det gick inte att ansluta till daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3585"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transaktion %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3595"/>
        <source>
Input %llu/%llu: amount=%s</source>
        <translation>
Ingång %llu/%llu: belopp=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3611"/>
        <source>failed to get output: </source>
        <translation>det gick inte att hämta utgång: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>utgångsnyckelns ursprungsblockhöjd får inte vara högre än blockkedjans höjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623"/>
        <source>
Originating block heights: </source>
        <translation>
Ursprungsblockhöjder: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3638"/>
        <source>
|</source>
        <translation>
|</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3638"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5646"/>
        <source>|
</source>
        <translation>|
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3655"/>
        <source>
Warning: Some input keys being spent are from </source>
        <translation>
Varning: Några ingångsnycklar som spenderas kommer från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657"/>
        <source>, which can break the anonymity of ring signature. Make sure this is intentional!</source>
        <translation>, vilket kan bryta ringsignaturens anonymitet. Se till att detta är avsiktligt!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4179"/>
        <source>Ring size must not be 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4191"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3719"/>
        <source>wrong number of arguments</source>
        <translation>fel antal argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4261"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4474"/>
        <source>No payment id is included with this transaction. Is this okay?  (Y/Yes/N/No): </source>
        <translation>Inget betalnings-ID har inkluderats med denna transaktion. Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3867"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4281"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Inga utgångar hittades, eller så är daemonen inte redo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6738"/>
        <source>Transaction successfully saved to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6738"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6740"/>
        <source>, txid </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6740"/>
        <source>Failed to save transaction to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>failed to get random outputs to mix: </source>
        <translation type="vanished">det gick inte att hitta slumpmässiga utgångar att mixa: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4076"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4309"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?  (Y/Yes/N/No): </source>
        <translation>Sveper upp %s i %llu transaktioner för en total avgift på %s.  Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4082"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4315"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4514"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?  (Y/Yes/N/No): </source>
        <translation>Sveper upp %s för en total avgift på %s.  Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4625"/>
        <source>Donating </source>
        <translation>Donerar </translation>
    </message>
    <message>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min mixin %lu. %sIs this okay? (Y/Yes/N/No): </source>
        <translation type="vanished">Läste in %lu transaktioner, för %s, avgift %s, %s, %s, med minsta mixin %lu. %sÄr detta okej? (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4787"/>
        <source>This is a watch only wallet</source>
        <translation>Detta är en granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566"/>
        <source>usage: show_transfer &lt;txid&gt;</source>
        <translation>användning: show_transfer &lt;transaktions-ID&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6668"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6703"/>
        <source>Transaction ID not found</source>
        <translation>Transaktions-ID kunde inte hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="214"/>
        <source>true</source>
        <translation>sant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="267"/>
        <source>failed to parse refresh type</source>
        <translation>det gick inte att parsa uppdateringstyp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="540"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="607"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>plånboken är enbart för granskning och saknar frö</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="556"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>plånboken är icke-deterministisk och saknar frö</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1221"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1240"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>plånboken är enbart för granskning och kan inte göra överföringar</translation>
    </message>
    <message>
        <source>mixin must be an integer &gt;= 2</source>
        <translation type="vanished">mixin måste vara ett heltal &gt;= 2</translation>
    </message>
    <message>
        <source>could not change default mixin</source>
        <translation type="vanished">det gick inte att ändra standardinställning för mixin</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1316"/>
        <source>could not change default priority</source>
        <translation>Det gick inte att ändra standardinställning för prioritet</translation>
    </message>
    <message>
        <source>Synchronize transactions and balance</source>
        <translation type="vanished">Synkronisera transaktioner och saldo</translation>
    </message>
    <message>
        <source>incoming_transfers [available|unavailable] - Show incoming transfers, all or filtered by availability</source>
        <translation type="vanished">incoming_transfers [available|unavailable] - Visa inkommande överföringar, alla eller filtrerade efter tillgänglighet</translation>
    </message>
    <message>
        <source>payments &lt;PID_1&gt; [&lt;PID_2&gt; ... &lt;PID_N&gt;] - Show payments for given payment ID[s]</source>
        <translation type="vanished">payments &lt;B_ID_1&gt; [&lt;B_ID_2&gt; … &lt;B_ID_N&gt;] - Visa betalningar för angivna betalnings-ID</translation>
    </message>
    <message>
        <source>transfer [&lt;priority&gt;] [&lt;mixin_count&gt;] &lt;address&gt; &lt;amount&gt; [&lt;payment_id&gt;] - Transfer &lt;amount&gt; to &lt;address&gt;. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the fee of the transaction. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;mixin_count&gt; is the number of extra inputs to include for untraceability. Multiple payments can be made at once by adding &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="vanished">transfer [&lt;prioritet&gt;] [&lt;mixin_antal&gt;] &lt;adress&gt; &lt;belopp&gt; [&lt;betalnings_id&gt;] - Överför &lt;belopp&gt; till &lt;adress&gt;. &lt;prioritet&gt; är transaktionens prioritet. Ju högre prioritet, desto högre transaktionsavgift. Giltiga värden i prioritetsordning (från lägsta till högsta) är: unimportant, normal, elevated, priority. Om det utelämnas kommer standardvärdet (se kommandot &quot;set priority&quot;) att användas. &lt;mixin_antal&gt; är det antal extra ingångar som ska inkluderas för att uppnå ospårbarhet. Flera betalningar kan göras på en gång genom att lägga till &lt;adress_2&gt; &lt;belopp_2&gt; etcetera (före betalnings-ID, om det inkluderas)</translation>
    </message>
    <message>
        <source>locked_transfer [&lt;mixin_count&gt;] &lt;addr&gt; &lt;amount&gt; &lt;lockblocks&gt;(Number of blocks to lock the transaction for, max 1000000) [&lt;payment_id&gt;]</source>
        <translation type="vanished">locked_transfer [&lt;mixin_antal&gt;] &lt;adress&gt; &lt;belopp&gt; &lt;låsblock&gt;(Antal block som transaktionen ska låsas för, max 1000000) [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <source>Send all unmixable outputs to yourself with mixin 0</source>
        <translation type="vanished">Skicka alla omixbara utgångar till dig själv med mixin 0</translation>
    </message>
    <message>
        <source>Sign a transaction from a file</source>
        <translation type="vanished">Signera en transaktion från en fil</translation>
    </message>
    <message>
        <source>Submit a signed transaction from a file</source>
        <translation type="vanished">Skicka en signerad transaktion från en fil</translation>
    </message>
    <message>
        <source>integrated_address [PID] - Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation type="vanished">integrated_address [PID] - Koda ett betalnings-ID till en integrerad adress för den aktuella plånbokens öppna adress (utan argument används ett slumpmässigt betalnings-ID), eller avkoda en integrerad adress till standardadress och betalnings-ID</translation>
    </message>
    <message>
        <source>Save wallet data</source>
        <translation type="vanished">Spara plånboksdata</translation>
    </message>
    <message>
        <source>Save a watch-only keys file</source>
        <translation type="vanished">Spara en fil med granskningsnycklar</translation>
    </message>
    <message>
        <source>Display private view key</source>
        <translation type="vanished">Visa privat visningsnyckel</translation>
    </message>
    <message>
        <source>Display private spend key</source>
        <translation type="vanished">Visa privat spendernyckel</translation>
    </message>
    <message>
        <source>Display Electrum-style mnemonic seed</source>
        <translation type="vanished">Visa minnesfrö (Electrum-typ)</translation>
    </message>
    <message>
        <source>Available options: seed language - set wallet seed language; always-confirm-transfers &lt;1|0&gt; - whether to confirm unsplit txes; print-ring-members &lt;1|0&gt; - whether to print detailed information about ring members during confirmation; store-tx-info &lt;1|0&gt; - whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference; default-mixin &lt;n&gt; - set default mixin (default is 4); auto-refresh &lt;1|0&gt; - whether to automatically sync new blocks from the daemon; refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt; - set wallet refresh behaviour; priority [0|1|2|3|4] - default/unimportant/normal/elevated/priority fee; confirm-missing-payment-id &lt;1|0&gt;; ask-password &lt;1|0&gt;; unit &lt;monero|millinero|micronero|nanonero|piconero&gt; - set default monero (sub-)unit; min-outputs-count [n] - try to keep at least that many outputs of value at least min-outputs-value; min-outputs-value [n] - try to keep at least min-outputs-count outputs of at least that value; merge-destinations &lt;1|0&gt; - whether to merge multiple payments to the same destination address</source>
        <translation type="vanished">Tillgängliga alternativ: seed language - ange språk för plånbokens frö; always-confirm-transfers &lt;1|0&gt; - huruvida ej delade transaktioner ska bekräftas; print-ring-members &lt;1|0&gt; - huruvida detaljerad information om ringmedlemmar ska skrivas ut vid bekräftelse; store-tx-info &lt;1|0&gt; - huruvida info om utgående transaktioner ska sparas (måladress, betalnings-ID, hemlig transaktionsnyckel) för framtida referens; default-mixin &lt;n&gt; - ange standardvärde för mixin (standard är 4); auto-refresh &lt;1|0&gt; - huruvida nya block från daemonen ska synkas automatiskt; refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt; - ange uppdateringsbeteende för plånbok; priority [0|1|2|3|4] - standard/oviktigt/normal/förhöjd/prioritetsavgift; confirm-missing-payment-id &lt;1|0&gt;; ask-password &lt;1|0&gt;; unit &lt;monero|millinero|micronero|nanonero|piconero&gt; - ange standardvärde för monero-(under-)enhet; min-outputs-count [n] - försök behålla åtminstone så många utgångar med ett värde på åtminstone min-outputs-value; min-outputs-value [n] - försök behålla åtminstone min-outputs-count utgångar av åtminstone detta värde; merge-destinations &lt;1|0&gt; - huruvida flera betalningar till samma måladress ska slås samman</translation>
    </message>
    <message>
        <source>Rescan blockchain for spent outputs</source>
        <translation type="vanished">Genomsök blockkedjan igen för spenderade utgångar</translation>
    </message>
    <message>
        <source>Get transaction key (r) for a given &lt;txid&gt;</source>
        <translation type="vanished">Hämta transaktionsnyckel (r) för ett givet &lt;transaktions-ID&gt;</translation>
    </message>
    <message>
        <source>Check amount going to &lt;address&gt; in &lt;txid&gt;</source>
        <translation type="vanished">Kontrollera belopp som går till &lt;adress&gt; i &lt;transaktions-ID&gt;</translation>
    </message>
    <message>
        <source>Generate a signature to prove payment to &lt;address&gt; in &lt;txid&gt; using the transaction secret key (r) without revealing it</source>
        <translation type="vanished">Skapa en signatur för att bevisa betalning till &lt;adress&gt; i &lt;transaktions-ID&gt; genom att använda hemlig nyckel för transaktion (r) utan att avslöja den</translation>
    </message>
    <message>
        <source>Check tx proof for payment going to &lt;address&gt; in &lt;txid&gt;</source>
        <translation type="vanished">Kontrollera transaktionsbevis för betalning som går till &lt;adress&gt; i &lt;transaktions-ID&gt;</translation>
    </message>
    <message>
        <source>unspent_outputs [&lt;min_amount&gt; &lt;max_amount&gt;] - Show unspent outputs within an optional amount range</source>
        <translation type="vanished">unspent_outputs [&lt;min_belopp&gt; &lt;max_belopp&gt;] - Visa ej spenderade utgångar inom ett valfritt beloppsintervall</translation>
    </message>
    <message>
        <source>Rescan blockchain from scratch</source>
        <translation type="vanished">Genomsök blockkedjan från början</translation>
    </message>
    <message>
        <source>Set an arbitrary string note for a txid</source>
        <translation type="vanished">Ange en godtycklig sträng som anteckning för ett transaktions-ID</translation>
    </message>
    <message>
        <source>Get a string note for a txid</source>
        <translation type="vanished">Hämta en stränganteckning för ett transaktions-ID</translation>
    </message>
    <message>
        <source>Show wallet status information</source>
        <translation type="vanished">Visa statusinformation för plånbok</translation>
    </message>
    <message>
        <source>Sign the contents of a file</source>
        <translation type="vanished">Signera innehållet i en fil</translation>
    </message>
    <message>
        <source>Verify a signature on the contents of a file</source>
        <translation type="vanished">Verifera signaturen för innehållet i en fil</translation>
    </message>
    <message>
        <source>Export a signed set of key images</source>
        <translation type="vanished">Exportera en signerad uppsättning nyckelavbildningar</translation>
    </message>
    <message>
        <source>Import signed key images list and verify their spent status</source>
        <translation type="vanished">Importera lista med signerade nyckelavbildningar och verifera deras spenderingsstatus</translation>
    </message>
    <message>
        <source>Export a set of outputs owned by this wallet</source>
        <translation type="vanished">Exportera en uppsättning utgångar som ägs av denna plånbok</translation>
    </message>
    <message>
        <source>Import set of outputs owned by this wallet</source>
        <translation type="vanished">Importera en uppsättning utgångar som ägs av denna plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (långsammast, inga antaganden); optimize-coinbase (snabb, antar att hela coinbase-transaktionen betalas till en enda adress); no-coinbase (snabbast, antar att ingen coinbase-transaktion tas emot), default (samma som optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1918"/>
        <source>monero, millinero, micronero, nanonero, piconero</source>
        <translation>monero, millinero, micronero, nanonero, piconero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1970"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Plånbokens namn ej giltigt. Försök igen eller använd Ctrl-C för att avsluta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1987"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Plånbok och nyckelfil hittades, läser in …</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1993"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Nyckelfil hittades men inte plånboksfilen. Återskapar …</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1999"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Nyckelfilen kunde inte hittas. Det gick inte att öppna plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018"/>
        <source>Generating new wallet...</source>
        <translation>Skapar ny plånbok …</translation>
    </message>
    <message>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-keys=&quot;wallet_name&quot;</source>
        <translation type="vanished">det går inte att ange mer än en av --generate-new-wallet=&quot;plånboksnamn&quot;, --wallet-file=&quot;plånboksnamn&quot;, --generate-from-view-key=&quot;plånboksnamn&quot;, --generate-from-json=&quot;json-filnamn&quot; och --generate-from-keys=&quot;plånboksnamn&quot;</translation>
    </message>
    <message>
        <source>can&apos;t specify both --restore-deterministic-wallet and --non-deterministic</source>
        <translation type="vanished">det går inte att ange både --restore-deterministic-wallet och --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2136"/>
        <source>Electrum-style word list failed verification</source>
        <translation>det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2169"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2224"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2243"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2263"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2327"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2408"/>
        <source>No data supplied, cancelled</source>
        <translation>Ingen data angiven, avbryter</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2175"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2358"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3786"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4235"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4449"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4989"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5053"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5261"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6348"/>
        <source>failed to parse address</source>
        <translation>det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2195"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2285"/>
        <source>failed to parse view key secret key</source>
        <translation>det gick inte att parsa hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2205"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2303"/>
        <source>failed to verify view key secret key</source>
        <translation>det gick inte att verifiera hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2209"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2307"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2388"/>
        <source>view key does not match standard address</source>
        <translation>visningsnyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2214"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2233"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2311"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2445"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2475"/>
        <source>account creation failed</source>
        <translation>det gick inte att skapa konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2229"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2269"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>failed to parse spend key secret key</source>
        <translation>det gick inte att parsa spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2295"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434"/>
        <source>failed to verify spend key secret key</source>
        <translation>det gick inte att verifiera spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2299"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>spend key does not match standard address</source>
        <translation>spendernyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2557"/>
        <source>failed to open account</source>
        <translation>det gick inte att öppna konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2561"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3080"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3137"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4957"/>
        <source>wallet is null</source>
        <translation>plånbok är null</translation>
    </message>
    <message>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or restart the wallet with the correct daemon address.</source>
        <translation type="vanished">Antingen har daemonen inte startat eller så angavs fel port. Se till att daemonen kör eller starta om plånboken med korrekt daemonadress.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2675"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2680"/>
        <source>invalid language choice passed. Please try again.
</source>
        <translation>ogiltigt språkval angavs. Försök igen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2748"/>
        <source>View key: </source>
        <translation>Visningsnyckel: </translation>
    </message>
    <message>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see the list of available commands.
Always use the &quot;exit&quot; command when closing monero-wallet-cli to save 
your current session&apos;s state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation type="vanished">Din plånbok har skapats!
För att starta synkronisering med daemonen, använd kommandot &quot;refresh&quot;.
Använd kommandot &quot;help&quot; för att se en lista över tillgängliga kommandon.
Använd alltid kommandot &quot;exit&quot; när du stänger monero-wallet-cli så att ditt aktuella sessionstillstånd sparas. Annars kan du bli tvungen att synkronisera
din plånbok igen (din plånboks nycklar är dock INTE hotade i vilket fall som helst).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2930"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Du kan också vilja ta bort filen &quot;%s&quot; och försöka igen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2958"/>
        <source>failed to deinitialize wallet</source>
        <translation>det gick inte att avinitiera plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3016"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3519"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6405"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>detta kommando kräver en betrodd daemon. Aktivera med --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3147"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>blockkedjan kan inte sparas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3234"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3533"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3238"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3537"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3248"/>
        <source>refresh error: </source>
        <translation>fel vid uppdatering: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3298"/>
        <source>Balance: </source>
        <translation>Saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>pubkey</source>
        <translation>öppen nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>key image</source>
        <translation>nyckelavbildning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3405"/>
        <source>unlocked</source>
        <translation>upplåst</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3404"/>
        <source>T</source>
        <translation>S</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3404"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3405"/>
        <source>locked</source>
        <translation>låst</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>RingCT</source>
        <translation>RingCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3480"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>betalnings-ID har ogiltigt format, en 16- eller 64-teckens hex-sträng förväntades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3541"/>
        <source>failed to get spent status</source>
        <translation>det gick inte att hämta spenderingsstatus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3656"/>
        <source>the same transaction</source>
        <translation>samma transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3656"/>
        <source>blocks that are temporally very close</source>
        <translation>block som ligger väldigt nära varandra i tiden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Låsta block för högt, max 1000000 (˜~4 år)</translation>
    </message>
    <message>
        <source>usage: get_tx_proof &lt;txid&gt; &lt;dest_address&gt; [&lt;tx_key&gt;]</source>
        <translation type="vanished">användning: get_tx_proof &lt;txid&gt; &lt;måladress&gt; [&lt;tx_key&gt;]</translation>
    </message>
    <message>
        <source>failed to parse tx_key</source>
        <translation type="vanished">det gick inte att parsa tx_nyckel</translation>
    </message>
    <message>
        <source>Tx secret key was found for the given txid, but you&apos;ve also provided another tx secret key which doesn&apos;t match the found one.</source>
        <translation type="vanished">Hemlig transaktionsnyckel hittades för det givna txid, men du har också angivit en annan hemlig transaktionsnyckel som inte matchar den hittade nyckeln.</translation>
    </message>
    <message>
        <source>Tx secret key wasn&apos;t found in the wallet file. Provide it as the optional third parameter if you have it elsewhere.</source>
        <translation type="vanished">Den hemliga transaktionsnyckeln kunde inte hittas i plånboksfilen. Ange den som den valfria tredje parametern om du har den någon annanstans.</translation>
    </message>
    <message>
        <source>Signature: </source>
        <translation type="vanished">Signatur: </translation>
    </message>
    <message>
        <source>usage: check_tx_proof &lt;txid&gt; &lt;address&gt; &lt;signature&gt;</source>
        <translation type="vanished">användning: check_tx_proof &lt;txid&gt; &lt;adress&gt; &lt;signatur&gt;</translation>
    </message>
    <message>
        <source>Signature header check error</source>
        <translation type="vanished">Fel vid kontroll av signaturhuvud</translation>
    </message>
    <message>
        <source>Signature decoding error</source>
        <translation type="vanished">nFel vid avkodning av signatur</translation>
    </message>
    <message>
        <source>Tx pubkey was not found</source>
        <translation type="vanished">Transaktionens öppna nyckel kunde inte hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5072"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5183"/>
        <source>Good signature</source>
        <translation>Bra signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5185"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288"/>
        <source>Bad signature</source>
        <translation>Dålig signatur</translation>
    </message>
    <message>
        <source>failed to generate key derivation</source>
        <translation type="vanished">det gick inte att skapa nyckelhärledning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6041"/>
        <source>usage: integrated_address [payment ID]</source>
        <translation>användning: integrated_address [betalnings-ID]</translation>
    </message>
    <message>
        <source>Integrated address: account %s, payment ID %s</source>
        <translation type="vanished">Integrerad adress: konto %s, betalnings-ID %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Standard address: </source>
        <translation>Standardadress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6082"/>
        <source>failed to parse payment ID or address</source>
        <translation>det gick inte att parsa betalnings-ID eller adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <source>usage: address_book [(add (&lt;address&gt; [pid &lt;long or short payment id&gt;])|&lt;integrated address&gt; [&lt;description possibly with whitespaces&gt;])|(delete &lt;index&gt;)]</source>
        <translation>användning: address_book [(add (&lt;adress&gt; [pid &lt;långt eller kort betalnings-ID&gt;])|&lt;Integrerad adress&gt; [&lt;beskrivning eventuellt med blanktecken&gt;])|(delete &lt;index&gt;)]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6123"/>
        <source>failed to parse payment ID</source>
        <translation>det gick inte att parsa betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6141"/>
        <source>failed to parse index</source>
        <translation>det gick inte att parsa index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6149"/>
        <source>Address book is empty.</source>
        <translation>Adressboken är tom.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155"/>
        <source>Index: </source>
        <translation>Index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6282"/>
        <source>Address: </source>
        <translation>Adress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6157"/>
        <source>Payment ID: </source>
        <translation>Betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6281"/>
        <source>Description: </source>
        <translation>Beskrivning: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6168"/>
        <source>usage: set_tx_note [txid] free text note</source>
        <translation>användning: set_tx_note [txid] fri textanteckning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6196"/>
        <source>usage: get_tx_note [txid]</source>
        <translation>användning: get_tx_note [txid]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>usage: sign &lt;filename&gt;</source>
        <translation>användning: sign &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6304"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>plånboken är enbart för granskning och kan inte signera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="946"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6341"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <source>failed to read file </source>
        <translation>det gick inte att läsa filen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5034"/>
        <source>usage: check_tx_proof &lt;txid&gt; &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5061"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5176"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5273"/>
        <source>failed to load signature file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5112"/>
        <source>usage: get_spend_proof &lt;txid&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5118"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5156"/>
        <source>usage: check_spend_proof &lt;txid&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5197"/>
        <source>usage: get_reserve_proof (all|&lt;amount&gt;) [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5203"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5248"/>
        <source>usage: check_reserve_proof &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5266"/>
        <source>Address must not be a subaddress</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5284"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348"/>
        <source>usage: show_transfers [in|out|all|pending|failed] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5485"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5521"/>
        <source>usage: unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_amount&gt; [&lt;max_amount&gt;]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5581"/>
        <source>There is no unspent output in the specified address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5694"/>
        <source> (no daemon)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5696"/>
        <source> (out of sync)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5753"/>
        <source>(Untitled account)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5766"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5784"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5809"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5832"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6008"/>
        <source>failed to parse index: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5990"/>
        <source>specify an index between 0 and </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5868"/>
        <source>usage:
  account
  account new &lt;label text with white spaces allowed&gt;
  account switch &lt;index&gt;
  account label &lt;index&gt; &lt;label text with white spaces allowed&gt;
  account tag &lt;tag_name&gt; &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account untag &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account tag_description &lt;tag_name&gt; &lt;description&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5896"/>
        <source>
Grand total:
  Balance: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5896"/>
        <source>, unlocked balance: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5904"/>
        <source>Untagged accounts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5910"/>
        <source>Tag %s is unregistered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5913"/>
        <source>Accounts with tag: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5914"/>
        <source>Tag&apos;s description: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5916"/>
        <source>Account</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5922"/>
        <source> %c%8u %6s %21s %21s %21s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5932"/>
        <source>----------------------------------------------------------------------------------</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5933"/>
        <source>%15s %21s %21s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5956"/>
        <source>Primary address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5956"/>
        <source>(used)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5977"/>
        <source>(Untitled address)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6017"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6030"/>
        <source>usage: address [ new &lt;label text with white spaces allowed&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;label text with white spaces allowed&gt; ]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6060"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6072"/>
        <source>Integrated address: %s, payment ID: %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Subaddress: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6237"/>
        <source>usage: get_description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6243"/>
        <source>no description found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6245"/>
        <source>description found: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6280"/>
        <source>Filename: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6285"/>
        <source>Watch only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6287"/>
        <source>%u/%u multisig%s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6289"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6290"/>
        <source>Type: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6291"/>
        <source>Testnet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6291"/>
        <source>Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6291"/>
        <source>No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6309"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6330"/>
        <source>usage: verify &lt;filename&gt; &lt;address&gt; &lt;signature&gt;</source>
        <translation>användning: verify &lt;filnamn&gt; &lt;adress&gt; &lt;signatur&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6355"/>
        <source>Bad signature from </source>
        <translation>Dålig signatur från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6359"/>
        <source>Good signature from </source>
        <translation>Bra signatur från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6368"/>
        <source>usage: export_key_images &lt;filename&gt;</source>
        <translation>användning: export_key_images &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6373"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>plånboken är enbart för granskning och kan inte exportera nyckelavbildningar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="901"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6386"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6468"/>
        <source>failed to save file </source>
        <translation>det gick inte att spara fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6397"/>
        <source>Signed key images exported to </source>
        <translation>Signerade nyckelavbildningar exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6411"/>
        <source>usage: import_key_images &lt;filename&gt;</source>
        <translation>användning: import_key_images &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6442"/>
        <source>usage: export_outputs &lt;filename&gt;</source>
        <translation>användning: export_outputs &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6479"/>
        <source>Outputs exported to </source>
        <translation>Utgångar exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6487"/>
        <source>usage: import_outputs &lt;filename&gt;</source>
        <translation>användning: import_outputs &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3814"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5214"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5540"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5548"/>
        <source>amount is wrong: </source>
        <translation>beloppet är fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815"/>
        <source>expected number from 0 to </source>
        <translation>förväntades: ett tal från 0 till </translation>
    </message>
    <message>
        <source>Money successfully sent, transaction </source>
        <translation type="vanished">Pengar skickades, transaktion </translation>
    </message>
    <message>
        <source>no connection to daemon. Please, make sure daemon is running.</source>
        <translation type="vanished">ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <source>not enough outputs for specified mixin_count</source>
        <translation type="vanished">inte tillräckligt många utgångar för angiven mixin_count</translation>
    </message>
    <message>
        <source>output amount</source>
        <translation type="vanished">utgångens belopp</translation>
    </message>
    <message>
        <source>found outputs to mix</source>
        <translation type="vanished">hittade utgångar att mixa</translation>
    </message>
    <message>
        <source>transaction was not constructed</source>
        <translation type="vanished">transaktionen konstruerades inte</translation>
    </message>
    <message>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation type="vanished">transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <source>one of destinations is zero</source>
        <translation type="vanished">ett av målen är noll</translation>
    </message>
    <message>
        <source>Failed to find a suitable way to split transactions</source>
        <translation type="vanished">Det gick inte att hitta ett passande sätt att dela upp transaktioner</translation>
    </message>
    <message>
        <source>unknown transfer error: </source>
        <translation type="vanished">okänt överföringsfel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4074"/>
        <source>Sweeping </source>
        <translation>Sveper upp </translation>
    </message>
    <message>
        <source>Sweeping %s for a total fee of %s.  Is this okay?  (Y/Yes/N/No)</source>
        <translation type="vanished">Sveper upp %s för en total avgift på %s.  Är detta okej?  (J/Ja/N/Nej)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4554"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Pengar skickades, transaktion: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4711"/>
        <source>Change goes to more than one address</source>
        <translation>Växel går till mer än en adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4752"/>
        <source>%s change to %s</source>
        <translation>%s växel till %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4755"/>
        <source>no change</source>
        <translation>ingen växel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1039"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4821"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transaktionen signerades till fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4871"/>
        <source>usage: get_tx_key &lt;txid&gt;</source>
        <translation>användning: get_tx_key &lt;transaktions-ID&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4879"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4963"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5045"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5125"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5163"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6175"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6203"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6573"/>
        <source>failed to parse txid</source>
        <translation>det gick inte att parsa transaktions-id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4893"/>
        <source>Tx key: </source>
        <translation>Tx-nyckel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4898"/>
        <source>no tx keys found for this txid</source>
        <translation>inga tx-nycklar kunde hittas för detta txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4907"/>
        <source>usage: get_tx_proof &lt;txid&gt; &lt;address&gt; [&lt;message&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4932"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5142"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5234"/>
        <source>signature file saved to: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4934"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5144"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236"/>
        <source>failed to save signature file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4948"/>
        <source>usage: check_tx_key &lt;txid&gt; &lt;txkey&gt; &lt;address&gt;</source>
        <translation>användning: check_tx_key &lt;txid&gt; &lt;txnyckel&gt; &lt;adress&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4971"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4980"/>
        <source>failed to parse tx key</source>
        <translation>det gick inte att parsa transaktionsnyckeln</translation>
    </message>
    <message>
        <source>failed to get transaction from daemon</source>
        <translation type="vanished">det gick inte att hämta transaktion från daemon</translation>
    </message>
    <message>
        <source>failed to parse transaction from daemon</source>
        <translation type="vanished">det gick inte att parsa transaktion från daemonen</translation>
    </message>
    <message>
        <source>failed to validate transaction from daemon</source>
        <translation type="vanished">det gick inte att validera transaktion från daemon</translation>
    </message>
    <message>
        <source>failed to get the right transaction from daemon</source>
        <translation type="vanished">det gick inte att hämta rätt transaktion från daemonen</translation>
    </message>
    <message>
        <source>failed to generate key derivation from supplied parameters</source>
        <translation type="vanished">det gick inte att skapa nyckelhärledning från angivna parametrar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4938"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5026"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5104"/>
        <source>error: </source>
        <translation>fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5002"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5075"/>
        <source>received</source>
        <translation>mottaget</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5002"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5075"/>
        <source>in txid</source>
        <translation>i transaktions-id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5021"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5094"/>
        <source>received nothing in txid</source>
        <translation>tog emot ingenting i transaktions-id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5005"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5078"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>VARNING: denna transaktion är ännu inte inkluderad i blockkedjan!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5011"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5084"/>
        <source>This transaction has %u confirmations</source>
        <translation>Transaktionen har %u bekräftelser</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5088"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>VARNING: det gick inte att avgöra antal bekräftelser!</translation>
    </message>
    <message>
        <source>usage: show_transfers [in|out|all|pending|failed] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="vanished">användning: show_transfers [in|out|all|pending|failed] [&lt;min_höjd&gt; [&lt;max_höjd&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5396"/>
        <source>bad min_height parameter:</source>
        <translation>dålig parameter för min_height:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5408"/>
        <source>bad max_height parameter:</source>
        <translation>dålig parameter för max_height:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5468"/>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5468"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5509"/>
        <source>out</source>
        <translation>ut</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5509"/>
        <source>failed</source>
        <translation>misslyckades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5509"/>
        <source>pending</source>
        <translation>väntar</translation>
    </message>
    <message>
        <source>usage: unspent_outputs [&lt;min_amount&gt; &lt;max_amount&gt;]</source>
        <translation type="vanished">användning: unspent_outputs [&lt;min_belopp&gt; &lt;max_belopp&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5555"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_belopp&gt; måste vara mindre än &lt;max_belopp&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5587"/>
        <source>
Amount: </source>
        <translation>
Belopp: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5587"/>
        <source>, number of keys: </source>
        <translation>, antal nycklar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5592"/>
        <source> </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5597"/>
        <source>
Min block height: </source>
        <translation>
Minblockhöjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5598"/>
        <source>
Max block height: </source>
        <translation>
Maxblockhöjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5599"/>
        <source>
Min amount found: </source>
        <translation>
Minbelopp funnet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5600"/>
        <source>
Max amount found: </source>
        <translation>
Maxbelopp funnet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5601"/>
        <source>
Total count: </source>
        <translation>
Totalt antal: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5641"/>
        <source>
Bin size: </source>
        <translation>
Storlek för binge: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5642"/>
        <source>
Outputs per *: </source>
        <translation>
Utgångar per *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5644"/>
        <source>count
  ^
</source>
        <translation>antal
  ^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5646"/>
        <source>  |</source>
        <translation>  |</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5648"/>
        <source>  +</source>
        <translation>  +</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5648"/>
        <source>+--&gt; block height
</source>
        <translation>+--&gt; blockhöjd
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5649"/>
        <source>   ^</source>
        <translation>   ^</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5649"/>
        <source>^
</source>
        <translation>^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5650"/>
        <source>  </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5691"/>
        <source>wallet</source>
        <translation>plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="665"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6052"/>
        <source>Random payment ID: </source>
        <translation>Slumpmässigt betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6053"/>
        <source>Matching integrated address: </source>
        <translation>Matchande integrerad adress: </translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many participants wil share parts of the multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create testnet multisig wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="81"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="138"/>
        <source>Error verifying multisig extra info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="146"/>
        <source>Error finalizing multisig</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="153"/>
        <source>Generated multisig wallets for address </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="157"/>
        <source>Error creating multisig wallets: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="176"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="194"/>
        <source>Error: expected N/M, but got: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="202"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="211"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="218"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="227"/>
        <source>Error: --filename-base is required</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="233"/>
        <source>Error: unsupported scheme: only N/N and N-1/N are supported</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="115"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Skapa ny plånbok och spara den till &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="116"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Skapa granskningsplånbok från visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="117"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="118"/>
        <source>Generate wallet from private keys</source>
        <translation>Skapa plånbok från privata nycklar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="119"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="121"/>
        <source>Language for mnemonic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="122"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Ange Electrum-frö för att återställa/skapa plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="123"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Återställ plånbok genom användning av minnesfrö (Electrum-typ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="124"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="125"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create non-deterministic view and spend keys</source>
        <translation type="vanished">Skapa non-deterministic visnings- och spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="126"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Aktivera kommandon som kräver en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="127"/>
        <source>Allow communicating with a daemon that uses a different RPC version</source>
        <translation>Tillåt kommunikation med en daemon som använder en annan version av RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="128"/>
        <source>Restore from specific blockchain height</source>
        <translation>Återställ från angiven blockkedjehöjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="129"/>
        <source>The newly created transaction will not be relayed to the monero network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="171"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180"/>
        <source>possibly lost connection to daemon</source>
        <translation>anslutning till daemonen kan ha tappats</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="197"/>
        <source>Error: </source>
        <translation>Fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6782"/>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6796"/>
        <source>Failed to initialize wallet</source>
        <translation>Det gick inte att initiera plånbok</translation>
    </message>
</context>
<context>
    <name>tools::dns_utils</name>
    <message>
        <source>DNSSEC validation passed</source>
        <translation type="vanished">DNSSEC-validering godkänd</translation>
    </message>
    <message>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation type="vanished">VARNING: DNSSEC-verifiering misslyckades, denna adress kanske inte är korrekt!</translation>
    </message>
    <message>
        <source>For URL: </source>
        <translation type="vanished">För URL: </translation>
    </message>
    <message>
        <source> Monero Address = </source>
        <translation type="vanished"> Monero-adress = </translation>
    </message>
    <message>
        <source>Is this OK? (Y/n) </source>
        <translation type="vanished">är det OK? (J/n) </translation>
    </message>
    <message>
        <source>you have cancelled the transfer request</source>
        <translation type="vanished">du har avbrutit överföringsbegäran</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="113"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Använd daemoninstans på &lt;värddator&gt;:&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="114"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Använd daemon-instansen på värddator &lt;arg&gt; istället för localhost</translation>
    </message>
    <message>
        <source>Wallet password</source>
        <translation type="vanished">Lösenord för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="116"/>
        <source>Wallet password file</source>
        <translation>Lösenordsfil för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="117"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Använd daemon-instansen på port &lt;arg&gt; istället för 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="119"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>För testnet. Daemonen måste också startas med flaggan --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="120"/>
        <source>Restricts to view-only commands</source>
        <translation>Begränsar till granskningskommandon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="168"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>det går inte ange värd eller port för daemonen mer än en gång</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="204"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>det går inte att ange mer än en av --password och --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="217"/>
        <source>the password file specified could not be read</source>
        <translation>det gick inte att läsa angiven lösenordsfil</translation>
    </message>
    <message>
        <source>Enter new wallet password</source>
        <translation type="vanished">Ange nytt lösenord för plånboken</translation>
    </message>
    <message>
        <source>failed to read wallet password</source>
        <translation type="vanished">det gick inte att läsa lösenord för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="240"/>
        <source>Failed to load file </source>
        <translation>Det gick inte att läsa in fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="115"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Lösenord för plånboken (använd escape-sekvenser eller citattecken efter behov)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="118"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Ange användarnamn[:lösenord] för RPC-klient till daemonen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="224"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246"/>
        <source>Failed to parse JSON</source>
        <translation>Det gick inte att parsa JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Version %u är för ny, vi förstår bara upp till %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="269"/>
        <source>failed to parse view key secret key</source>
        <translation>det gick inte att parsa hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274"/>
        <location filename="../src/wallet/wallet2.cpp" line="339"/>
        <location filename="../src/wallet/wallet2.cpp" line="379"/>
        <source>failed to verify view key secret key</source>
        <translation>det gick inte att verifiera hemlig visningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="285"/>
        <source>failed to parse spend key secret key</source>
        <translation>det gick inte att parsa spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="290"/>
        <location filename="../src/wallet/wallet2.cpp" line="349"/>
        <location filename="../src/wallet/wallet2.cpp" line="404"/>
        <source>failed to verify spend key secret key</source>
        <translation>det gick inte att verifiera spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="302"/>
        <source>Electrum-style word list failed verification</source>
        <translation>det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="319"/>
        <source>At least one of Electrum-style word list and private view key and private spend key must be specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="360"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="391"/>
        <source>failed to parse address: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="397"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At least one of Electrum-style word list and private view key must be specified</source>
        <translation type="vanished">Åtminstone en av ordlista av Electrum-typ och privat visningsnyckel måste anges</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="323"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Både ordlista av Electrum-typ och privat nyckel har angivits</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="333"/>
        <source>invalid address</source>
        <translation>ogiltig adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="342"/>
        <source>view key does not match standard address</source>
        <translation>visningsnyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="352"/>
        <source>spend key does not match standard address</source>
        <translation>spendernyckel matchar inte standardadress</translation>
    </message>
    <message>
        <source>Cannot create deprecated wallets from JSON</source>
        <translation type="vanished">Det går inte att skapa inaktuella plånböcker från JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="412"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2811"/>
        <location filename="../src/wallet/wallet2.cpp" line="2871"/>
        <location filename="../src/wallet/wallet2.cpp" line="2950"/>
        <location filename="../src/wallet/wallet2.cpp" line="2996"/>
        <location filename="../src/wallet/wallet2.cpp" line="3087"/>
        <location filename="../src/wallet/wallet2.cpp" line="3187"/>
        <location filename="../src/wallet/wallet2.cpp" line="3597"/>
        <location filename="../src/wallet/wallet2.cpp" line="3953"/>
        <source>Primary account</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="7912"/>
        <source>No funds received in this tx.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="8605"/>
        <source>failed to read file </source>
        <translation>det gick inte att läsa filen </translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="160"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemonen är lokal, utgår från att den är betrodd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="175"/>
        <source>Failed to create directory </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="177"/>
        <source>Failed to create directory %s: %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="188"/>
        <source>Cannot specify --</source>
        <translation>Det går inte att ange --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="188"/>
        <source> and --</source>
        <translation> och --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="207"/>
        <source>Failed to create file </source>
        <translation>Det gick inte att skapa fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="207"/>
        <source>. Check permissions or remove file</source>
        <translation>. Kontrollera behörigheter eller ta bort filen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="217"/>
        <source>Error writing to file </source>
        <translation>Fel vid skrivning till fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="220"/>
        <source>RPC username/password is stored in file </source>
        <translation>Användarnamn/lösenord för RPC har sparats i fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="443"/>
        <source>Tag %s is unregistered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2418"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2853"/>
        <source>This is the RPC monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2876"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Det går inte att ange mer än en av --wallet-file och --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2888"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Måste ange --wallet-file eller --generate-from-json eller --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2892"/>
        <source>Loading wallet...</source>
        <translation>Läser in plånbok …</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2925"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2958"/>
        <source>Storing wallet...</source>
        <translation>Sparar plånbok …</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2927"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2960"/>
        <source>Stored ok</source>
        <translation>Sparad ok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2930"/>
        <source>Loaded ok</source>
        <translation>Inläst ok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2934"/>
        <source>Wallet initialization failed: </source>
        <translation>Det gick inte att initiera plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2941"/>
        <source>Failed to initialize wallet rpc server</source>
        <translation>Det gick inte att initiera RPC-servern för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2945"/>
        <source>Starting wallet rpc server</source>
        <translation>Startar RPC-servern för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2952"/>
        <source>Failed to run wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2955"/>
        <source>Stopped wallet rpc server</source>
        <translation>Stoppade RPC-servern för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2964"/>
        <source>Failed to store wallet: </source>
        <translation>Det gick inte att spara plånbok: </translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6755"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2839"/>
        <source>Wallet options</source>
        <translation>Alternativ för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Skapa plånbok från fil i JSON-format</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Använd plånbok &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="104"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Max antal trådar att använda för ett parallellt jobb</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="105"/>
        <source>Specify log file</source>
        <translation>Ange loggfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="106"/>
        <source>Config file</source>
        <translation>Konfigurationsfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>General options</source>
        <translation>Allmänna alternativ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="138"/>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="161"/>
        <source>Can&apos;t find config file </source>
        <translation>Det gick inte att hitta konfigurationsfilen </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="195"/>
        <source>Logging to: </source>
        <translation>Loggar till: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="197"/>
        <source>Logging to %s</source>
        <translation>Loggar till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="140"/>
        <source>Usage:</source>
        <translation>Användning:</translation>
    </message>
</context>
</TS>

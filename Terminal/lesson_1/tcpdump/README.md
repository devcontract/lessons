
## tcpdump




sudo tcpdump -tttt  -i  en0 -w  ~/Desktop/log/log.pcap

sudo tcpdump -tttt -nr ~/Desktop/log/log.pcap > ~/Desktop/log/toText.txt

sudo tcpdump -tttt -nr ~/Desktop/log/log.pcap | grep AAAA? > ~/Desktop/log/toText.txt

 column -s" " -t  ~/Desktop/log/toText.txt
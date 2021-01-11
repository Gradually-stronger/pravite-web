yarn build
ssh root@193.112.205.103 "rm -rf /root/services/web/*" 
scp -r dist/* root@193.112.205.103:/root/services/web
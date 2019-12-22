echo "---------------------------------------------------------"
echo "-> install node and npm"
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y gcc g++ make

echo "---------------------------------------------------------"
echo "-> install spaas"
npm install && npm link

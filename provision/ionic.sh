sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo npm install -g ionic cordova


cd /vagrant/app
ionic plugin add cordova-plugin-network-information
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install -y openjdk-8-jdk

cd ~
echo 'export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64' >> ~/.profile
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.profile
source ~/.profile 

sudo apt-get install -y python-selinux
sudo chmod -R 777 /vagrant/
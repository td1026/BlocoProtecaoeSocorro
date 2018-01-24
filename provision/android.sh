cd ~
wget http://dl.google.com/android/android-sdk_r24.2-linux.tgz
tar -xvf android-sdk_r24.2-linux.tgz

cd ~/android-sdk-linux/tools
( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | ./android update sdk --no-ui

cd ~
echo 'export ANDROID_HOME=~/android-sdk-linux/' >> ~/.profile
echo 'export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platforms-tools' >> ~/.profile
source ~/.profile 

sudo apt-get install -y libc6:i386 libstdc++6:i386
sudo apt-get install -y zlib1g:i386

cd ~/android-sdk-linux/tools
( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | ./android update sdk --no-ui



sudo apt-get -y install unzip
cd ~
wget https://services.gradle.org/distributions/gradle-3.4.1-bin.zip
sudo mkdir /opt/gradle
sudo unzip -d /opt/gradle gradle-3.4.1-bin.zip


echo 'export GRADLE_HOME=/opt/gradle/gradle-3.4.1/bin' >> ~/.profile
echo 'export PATH=$PATH:/opt/gradle/gradle-3.4.1/bin' >> ~/.profile
source ~/.profile
gradle -v
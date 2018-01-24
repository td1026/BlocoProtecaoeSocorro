# BlocoCVP

vagrant up vagrant halt vagrant destroy -f vagrant ssh

vagrant ssh -c "cd /vagrant/myapp && ionic serve"

vagrant ssh -c "cd /vagrant && ionic start myapp tabs" vagrant ssh -c "cd /vagrant/myapp && ionic cordova platform add android" vagrant ssh -c "cd /vagrant/myapp/platforms/android && gradle"

vagrant ssh -c "cd /vagrant/myapp && ionic cordova build android"
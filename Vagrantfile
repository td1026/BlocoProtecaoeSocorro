Vagrant.configure("2") do |config|

    config.vm.network :forwarded_port, guest: 80,   host: 80,   auto_correct: true      
    config.vm.network :forwarded_port, guest: 8100,   host: 8100,   auto_correct: true 
    config.vm.network :forwarded_port, guest: 35729,   host: 35729,   auto_correct: true 
    config.vm.network :forwarded_port, guest: 53703,   host: 53703,   auto_correct: true 
    
    config.vm.provider :virtualbox do |vm, override|	
        vm.cpus       = 2
        vm.memory     = 4096
        override.vm.box = "bento/ubuntu-16.04"
    end

    config.vm.provision "Inicial", type: "shell" do |s| 
		s.privileged = false
		s.path = "provision/Inicial.sh" 
    end
	config.vm.provision "Ionic", type: "shell" do |s| 
		s.privileged = false
		s.path = "provision/Ionic.sh" 
    end
    config.vm.provision "Android", type: "shell" do |s| 
		s.privileged = false
		s.path = "provision/Android.sh" 
    end	
end
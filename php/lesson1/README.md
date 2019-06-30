
## MYSQL SSL


_____________________


### Примечание:

#В нижеприведенном примере сертификаты хранятся в папке самого проекта – это категорически не приемлемо в продакшне.


_________________

### Для этого примера нам понадобятся SSL сертификаты . 
### Сгенерировать которые можно при помощи msql .
### Данный пример рассчитан , на то что у вас установлен MAMP .
### Команды в терменале:


$ mkdir /Applications/MAMP/htdocs/project

$ mkdir /Applications/MAMP/htdocs/project/ssl

$ mkdir /Applications/MAMP/htdocs/project/sslClient


$ /Applications/MAMP/Library/bin/ mysql_ssl_rsa_setup --datadir=/Applications/MAMP/htdocs/project/ssl

$ open /Applications/MAMP/htdocs/project/ssl 



### На данном этапе вы должны находится в 

/Applications/MAMP/htdocs/project/ssl – тут вы найдете следующие сертификаты:


### Скопируйте сертификаты клиента

 ca.pem
 
 client-cert.pem
 
 client-key.pem
 
 public_key.pem
 
### в папку sslClient
 
 
(/Applications/MAMP/htdocs/project/sslClient) 


### Теперь настроим my.cnf конфигурации mysql сервера:

$ cd /Applications/MAMP/conf
$ nano my.cnf

[mysqld]
ssl-ca=/Applications/MAMP/htdocs/project/ssl/ca.pem
ssl-cert=/Applications/MAMP/htdocs/project/ssl/server-cert.pem
ssl-key=/Applications/MAMP/htdocs/project/ssl/server-key.pem
require_secure_transport=ON


## .Теперь сохраните этот фаил и перезагрузите MAMP сервер.

 



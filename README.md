# Landing Page

### Instalacja środowiska Node.JS oraz NPM dla systemu Windows:

* Pobierz ze strony https://nodejs.org/ plik instalacyjny Node.JS (stabilna wersja v4.4.1 LTS) dla odpowiedniej wersji Twojego systemu (32-bit lub 64-bit).
* Uruchom proces instalacyjny z pobranego pliku (plik z rozszerzeniem .msi lub .exe pobrany w punkcie pierwszym).
* Postępujemy dalej z instalacją potwierdzając przyciskiem "Next" kolejne kroki instalacji.
* Po zakończonej instalacji w systemie windows dostępna będzie nowa linia poleceń o nazwie "Node.JS command prompt".
* Po uruchomieniu Node.JS command prompt należy wpisać ```node -v && npm -v``` w celu weryfikacji czy instalacja zakończyła się sukcesem. Konsola powinna zwrócić dwie wartości - pierwsza określa zainstalowaną wersje Node.JS w systemie, druga - wersje NPM.

### Instalacja środowiska Node.JS oraz NPM dla systemu Linux:

* Otwórz konsole poprzez nacisnięcie skrótu klawiszowego: Ctrl-Alt+T.
* W celu podlinkowania paczki należy wpisać w oknie konsoli:
```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
```
* Następnie należy pobrać Node.JS wpisujać w konsoli:
```
sudo apt-get install -y nodejs
```
* Sprawdzamy poprawność zainstalowanej paczki wpisując ```node -v && npm -v```. Konsola powinna zwrócić dwie wartości - pierwsza określa zainstalowaną wersje Node.JS w systemie, druga - wersje NPM.

### Instalacja środowiska Node.JS oraz NPM dla systemu OS X poprzez Homebrew (http://brew.sh/):

* Instalacja homebrew (http://brew.sh/):
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
* Następnie w oknie konsoli systemu OS X:
```
brew install node
```
* Sprawdzenie czy NPM i Node.JS są poprawnie zainstalowane w systemie:
```
node -v && npm -v
```
Konsola powinna zwrócić dwie wartości - pierwsza określa zainstalowaną wersje Node.JS w systemie, druga - wersje NPM.
* Istnieje możliwość pobrania pliku instalacyjnego z oficialnej strony (https://nodejs.org/) w celu instalacji pakietu Node.JS. Kroki instalacyjne są bardzo podobne do tych które podejmowane były w trakcie instalacji pakietu w środowisku Winsows.

### Instalacja GIT:
* Proces instalacyjny dostępny na oficjalnej stronie GIT (https://git-scm.com/book/pl/v1/Pierwsze-kroki-Instalacja-Git)

### Pobranie i uruchomienie aplikacji Landing Page.
By korzystać z przygotowanej aplikacji Landing Page należy pobrać projekt. Pierwszym sposobem jest wykorzystanie GIT w celu pobrania kopii projektu na dysk twardy komputera. W oknie terminala należy wpisać ```git clone https://github.com/hussar-academy/landing-page``` następnie ```cd landing-page``` by przejść do folderu z projektem Landing Page. Pozostając jeszcze w oknie terminala należy pobrać zależności z pliku ```package.json``` do katalogu ```node_modules```. Dokonujemy tego wpisąc w oknie terminala ```npm install```. Po krótkiej chwili oczekiwania wszystkie zależności zostaną pobrane na lokalny dysk twardy. Samą aplikacje uruchamiamy wpisąc w konsoli ```npm run start```.

Wpisując w pasku ulubionej przeglądarki ```http://localhost:8080/``` przejdziemy do uruchomionej i działającej aplikacji.

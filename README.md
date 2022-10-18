# Gator-Calendar

# Initial set up
1. Install python3
2. Create virtual environment in root project directory and activate virtual environment, information at https://docs.python.org/3/library/venv.html
3. After activating environment, install from requirements.txt in the current directory
```console
foo@bar:~$ pip install -r /path/to/requirements.txt
```
4. Install Node at https://nodejs.org/en/download/

# How to run:
1. You need two terminals, for the first terminal, navigate to frontend directory and run
```console
foo@bar:~$ npm run dev
```
2. For the second terminal, navigate to backend directory and run
```console
foo@bar:~$ python manage.py runserver
```
# Example run in Windows PowerShell:
```console
PS: C:path\to\hold\project> git clone https://github.com/lillymcguire/Gator-Calendar.git
remote: Enumerating objects: 5759, done.
remote: Counting objects: 100% (5759/5759), done.
remote: Compressing objects: 100% (4020/4020), done.
remote: Total 5759 (delta 1469), reused 5751 (delta 1468), pack-reused 0
Receiving objects: 100% (5759/5759), 9.51 MiB | 3.74 MiB/s, done.

Resolving deltas: 100% (1469/1469), done.
Updating files: 100% (5323/5323), done.

PS: C:path\to\hold\project> cd Gator-Calendar
PS: C:path\to\hold\project\Gator-Calendar> cd frontend
PS: C:path\to\hold\project\Gator-Calendar\frontend> npm run dev

asset main.js 1.39 MiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1.04 KiB 5 modules
modules by path ./node_modules/ 1.29 MiB
  modules by path ./node_modules/react/ 88.4 KiB 2 modules
  modules by path ./node_modules/react-dom/ 1.01 MiB 2 modules
  modules by path ./node_modules/scheduler/ 17.9 KiB 2 modules
  ./node_modules/react-router-dom/dist/index.js 30.3 KiB [built] [code generated]
  ./node_modules/react-router/dist/index.js 50.2 KiB [built] [code generated]
  ./node_modules/@remix-run/router/dist/router.js 103 KiB [built] [code generated]
modules by path ./src/ 900 bytes
  ./src/index.js 191 bytes [built] [code generated]
  ./src/components/App.js 578 bytes [built] [code generated]
  ./src/components/Home.js 131 bytes [built] [code generated]
webpack 5.74.0 compiled successfully in 1216 ms
```
In another window at the same time
```console
PS: C:path\to\hold\project\Gator-Calendar> python -m venv venv1
PS: C:path\to\hold\project\Gator-Calendar> ./venv1/Scripts/activate
(venv1) PS: C:path\to\hold\project\Gator-Calendar> pip install -r requirements.txt

Collecting asgiref==3.5.2
  Using cached asgiref-3.5.2-py3-none-any.whl (22 kB)
Collecting Django==4.1.2
  Using cached Django-4.1.2-py3-none-any.whl (8.1 MB)
Collecting djangorestframework==3.14.0
  Using cached djangorestframework-3.14.0-py3-none-any.whl (1.1 MB)
Collecting pytz==2022.4
  Using cached pytz-2022.4-py2.py3-none-any.whl (500 kB)
Collecting sqlparse==0.4.3
  Using cached sqlparse-0.4.3-py3-none-any.whl (42 kB)
Collecting tzdata==2022.5
  Using cached tzdata-2022.5-py2.py3-none-any.whl (336 kB)
Installing collected packages: pytz, tzdata, sqlparse, asgiref, Django, djangorestframework
Successfully installed Django-4.1.2 asgiref-3.5.2 djangorestframework-3.14.0 pytz-2022.4 sqlparse-0.4.3 tzdata-2022.5

(venv1) PS: C:path\to\hold\project\Gator-Calendar> python manage.py runserver

Performing system checks...

System check identified no issues (0 silenced).
October 18, 2022 - 10:54:32
Django version 4.1.2, using settings 'Calendar.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
[18/Oct/2022 10:54:43] "GET / HTTP/1.1" 200 626
[18/Oct/2022 10:54:43] "GET /static/css/index.css HTTP/1.1" 200 0
[18/Oct/2022 10:54:43] "GET /static/frontend/main.js HTTP/1.1" 200 1457343
Not Found: /favicon.ico
[18/Oct/2022 10:54:43] "GET /favicon.ico HTTP/1.1" 404 2363
```
Navigate to http://127.0.0.1:8000/ on your browser to view webpage

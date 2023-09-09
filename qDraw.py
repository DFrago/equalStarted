#!/usr/bin/env python3
import os
import sys
import webbrowser

if len(sys.argv)<2:
    print('\n1 parameter is required : Avaliable paramaters are 1(Frontend) or 2(Backend) or 3(Both)\n')
    exit()

arg=sys.argv[1]
current_os=os.name
home=os.getcwd()

if arg not in ['1','2','3']:
    print('Invalid Parameters(Ur trash lol)! Avaliable paramaters are 1(Frontend) or 2(Backend) or 3(Both)')

try:
    os.chdir('backend')
    if current_os=='posix':
        os.system('./pocketbase serve &')
    elif current_os=='nt':
        os.system('start pocketbase serve &')
    os.chdir(home)
    os.chdir('frontend')
    os.system('npm run dev &')
except Exception as e:
    print(e)

match arg:
    case '1':
        webbrowser.open('http://localhost:3000/')
    case '2':
        webbrowser.open('http://127.0.0.1:8090/_/')
    case '3':
        webbrowser.open('http://localhost:3000/')
        webbrowser.open('http://127.0.0.1:8090/_/')

    

#!/usr/bin/env python3
import os
import sys
import webbrowser

def inRange(value:str)->bool:
    if value in ['1','2','3']:
        return True
    return False

#For Standalone
if len(sys.argv)<2:
    isValid=False
    while not isValid:
        arg=input('(Enter q to quit) Make a selection: Avaliable paramaters are 1(Frontend) or 2(Backend) or 3(Both): ')
        if arg=="q":
            exit()
        elif not inRange(arg):
            print('Invalid Parameters(Ur trash lol)!')
        else:
            isValid=True

#For CLI use
else:
    arg=sys.argv[1]

current_os=os.name
home=os.getcwd()

if not inRange(arg):
    print('Invalid Parameters(Ur trash lol)! Avaliable paramaters are 1(Frontend) or 2(Backend) or 3(Both)')
    exit()

match arg:
    case '1':
        webbrowser.open('http://localhost:3000/')
    case '2':
        webbrowser.open('http://127.0.0.1:8090/_/')
    case '3':
        webbrowser.open('http://localhost:3000/')
        webbrowser.open('http://127.0.0.1:8090/_/')


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

    

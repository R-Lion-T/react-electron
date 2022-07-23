# ElectronReact

> Моя сборка Electron.js и React.js. Мне кажеться эта сборка удобная в плане разработки. Настроил router для навигации и перехода на другие страницы. Настроил Redux, создаете action и dispatch и работаете. Сборка на bozon позволяет настраивать проект под разные режимы работы программы режиме создания, теста и сборки. Так же настроил webpack на подключение файлов (.js, .png, .mp3 и  .ttf шрифтов).  


## Установка пакета
1. Скачайте проект.
2. Откройте консоль cmd или node, перейдите в директорию проекта и введите код `npm install` или `yarn add`
3. После того как пакеты установились можете запустить проект в той-же консоле введите `bozon start`. При успешном установке и запуска проекта у вас повиться окно с приложением.


### Старт проекта

- `bozon start` - Запустить проект. Внимание! Каждый раз будите закрывать проект и снова запускать при редактировании.
- `npm start` - Запустить проект в режиме редактирования. Внимание! Режим редактирование работает только  renderer process.
- `npm run debagger` - Запустить проект в режиме дебага main process. Внимание! При запуске дебага запусите проект и перейдите по ссылке 'browser://inspect/#devices' там появиться ваш проект перейдите по ссылке и дебажите.
- `npm run build` - Сборка проекта. Внимание! Сборка настроенна под window. Если вы опытный специалист то можете настроить build для других планформ.
- `npm test` - Тестирование проекта.


### Полезные ссылки
- [electron-build](https://www.electron.build/) - Сайт поможет вам настроить обновление вашего проекта.
- [React](https://reactjs.org/) - Этот сайт поможет разобраться в React.
- [Electron](https://www.electronjs.org/) - Этот сайт поможет разобраться в Electron.
- [Прохоренок](http://прохоренок.рф/pdf/electron/) - Этот сайт так же поможет разобраться в Electron.
- [СyberHaus](https://www.youtube.com/c/CyHaus) - Данный автор поможет вам начать electron проект.
- [ Christian Engvall ](https://www.christianengvall.se/category/electron/) - Этот сайт тоже поможет в разработе electron приложений.

## Философия
 Я хочу пожелать вам удачи в разработке electron приложений, никогда не останавливайтесь на месте, любые трудности вы должны преодолевать. У вас будут какие-либо проблемы баги, ошибки, или что-то не получаться не отчаиваетесь, передохните и пробуйте еще раз и еще раз пока вы не добьетесь своего иначе не может быть по-другому, ты ведь победитель, а быть им не просто! Хочу, чтоб вы научились гуглить, умели искать кукую либо информацию. Не бойтесь трудностей без них не может быть развития. Если вы не видите решения в каком-либо ситуации, попробуйте отойти на 10 шагов назад и посмотреть проблему из далека если ничего не заметили позовите друг(а/у) и гляньте на проблему в месте. Гениальность может быть в простоте.

Builds the app for Windows, using [electron-builder](https://github.com/electron-userland/electron-builder).


## License

The MIT License (MIT) © Roman Tamazyan 2021

#Initial setup
- Clone repo - git clone (https://github.com/iamidm/IdentityManager.Imx.git)
- Make dev branch from clone i VSCode
- Install node -https://nodejs.org/en/download/prebuilt-installer/current
- Install angular cli - npm install -g @angular/cli

- package.json shown commands to run 
- imxmodules folder
    - kompessed api files for the API server
- projects folder
    - Most important
    - Complete code for IT Shop
    - Subdirectory for different modules
    - Static libraries QBE / QBM
    - All other are dynamic libraries
- folder with -app- are the applications that show in the portal
- Install dependencies
    - PS C:\Users\OneIM\Git\IdentityManager.Imx> cd .\imxweb\
    - npm install
- Install lib (be in imxweb directory)
    - QBM always first
        npm run build qbm
    - QER second
        npm run build qer
    - Se also IdentityManager.Imx\.github\workflows\npm-build.yml for all build requirments
    - TSB
        ng build --watch --configuration dynamic tsb
    - All the others in npm-build:
        ng build --watch --configuration dynamic <modulename>
        - apc and sac

#Starting portal in local machine
    -After all the builds:
        - Start new Terminal:
            - C:\Program Files\One Identity\One Identity Manager> .\ImxClient.exe run-apiserver -B
            Leave running.
        - Start new Terminal:
            \imxweb> npm run build:watch qbm
        - Start new Terminal:
            \imxweb> npm run build:watch qer


        - Switch to old terminal
            - npm run start qer-app-portal
            - Launch to http://localhost:4200/#/ for the app portal.
            - Login Iden. (rolebased) with manos / xxxxxxxxxxxxxxxxxx

#CSS
 - Legge tilpassninger i imxweb\projects\qer-app-portal\src\styles.scss
    -  Greit når man skal merge/rebase mot ny kode fra OID master
    - Legge på !important for å tvinge igjennom, men anbefalses ikke!!
    - Her må vi sjekke mer. Dårlig opplæring på dette.

#Hiding stuff
    - Hide a tile on the page.
        - imxweb\projects\qer\src\lib\wport\start\start.component.html
            
#Building packages
-Libraries
    - npm run build:lib <libname (qbm)>
-Application
    - npm run build:app qer-app-portal
- Zip files in the <lib> dir to file with name html_<libname>
    - In the "IdentityManager.Imx\imxweb\dist\rps" dir make "Html_rps.zip"
- Delete C:\Users\OneIM\Git\IdentityManager.Imx\imxweb\dist\qer-app-portal\html folder befor zipping qer-app-portal
- move all the zip files to the custom folder on the webserver.
    - wwwroot\ApiServer\bin\imxweb\custom
- iis reset
-
# Updates from OIM
- Switch to the none dev branche
    - Build lib from rebased OIM master branch
    - Move these to the inetpub folder

#Git oppsett ?
- Lage branch fra OIM
    - Lage en Dev branch fra denne
    - Hver utvilker lager så en branch av denne igjen.
    - Disse samles i Dev branch.
    
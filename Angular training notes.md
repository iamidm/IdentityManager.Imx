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


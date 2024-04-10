## Add dependencies:
- jest (?)
- playwright
- cucumber

Used documentation:
https://talent500.co/blog/how-to-integrate-cucumber-with-playwright/
https://nextjs.org/docs/pages/building-your-application/testing/playwright

🥫 1:
- ✅ Create end to end test
- ✅ Add submodule with contract repo

Another better documentation using the same structure that we do:
https://www.genui.com/resources/getting-started-with-bdd-using-cucumber-io


Startbutton is made
🥫 2:
- ✅ Button is a HTML button
- ✅ Button has the right text
- ✅ Make sure the button is clickable and triggers the right function

- Create a game component:
    - This should render the startGame button
    - After clicking on the button, a chessboard should be shown

🥫 3:
Chessboard component: 
- ✅ Setup first version of a test
- ✅ Setup first version of the code

🥫 4:
- ✅ Add test for alternating colors
- ✅ Include text colors in the test
- ✅ Add test when a King is included in the data

🥫 5:
Call back-end API for IsKingInCheck outcome
- ✅ 200 OK
- ✅ Bad BAD flow

🥫 6:
- ✅ Use the fetchGameStatus function to display a chessboard when start is clicked

🥫 7:
- ✅ Check end to end test
-- Made changes in the steps file to fix the expect statements

Fix the last step: the label that shows if the king is in check!
- ✅ Create component that receives a boolean and returns the corresponding text
- - ✅ false --> King is not in check
- - ✅ true --> King is in check
DUH
                       ______.--------.
                     /'                \
                    /'\                 \
                ..-'\()'\    .'''.    ./'
               |                .'    /
                \..}                  '\.
                 /     {      /'    '\   \
                {------'    .'        '.  '|
                 \        . |           \   |
                  '\_____/  |            |   |
                   /       |             |    |
                 .'       |              |     |
                 |       |              |       |
                 |      |              |       |
                 |                    |         \
                                                 |

- Update game component with label, beneath chessboard

🥫 8:
Finish E2E test
Go mierenneuk voor visuals

🥫 9:
Next step:
- ✅ Make sure this project can be built as a docker image
- 🙋‍♂️ Add a pipeline that can push this image to dockerhub

- Create a new repo, containing front and backend for a docker-compose so one could launch the stack in 1 single command\


dkoidwjkoidjoiwdjq
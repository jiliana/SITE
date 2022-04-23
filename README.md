# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Jiliana Tiu**

Time spent: **10** hours spent in total

Link to project: [https://glitch.com/edit/#!/bramble-caramel-lemonade](https://glitch.com/edit/#!/bramble-caramel-lemonade)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Keeps score of total wins and losses
- [x] Day/Night mode toggle
- [x] User can post their score on leaderboard
- [x] User can view top 20 scores on leaderboard
- [x] User's score is stored locally and persists after browser is closed (localStorage)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Win
![Win Part 1](https://cdn.glitch.global/439abd06-2850-4686-8027-bbe626ece68d/win.gif?v=1650694307387)
![Win Part 2](https://cdn.glitch.global/439abd06-2850-4686-8027-bbe626ece68d/win2.gif?v=1650694376758)

Loss
![Loss](https://cdn.glitch.global/439abd06-2850-4686-8027-bbe626ece68d/loss.gif?v=1650694722427)


Night Mode and Post on Leaderboard
![Night Mode and Post on Leaderboard](https://cdn.glitch.global/439abd06-2850-4686-8027-bbe626ece68d/night_post.gif?v=1650694570025)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- [favicon.io](https://favicon.io/emoji-favicons/): I used this site to download a brain emoji favicon.
- [Font Awesome](https://fontawesome.com/): I used this site to download image assets.
- [Mixkit](https://mixkit.co/free-sound-effects/animals/): I used this site to download audio for the buttons.
- [coolors.co](https://coolors.co/): I used this site to create an interesting color palette.
- [Figma](https://www.figma.com/file/f6YcmQZR8iqqaqQEe86b12/Memory-Game?node-id=0%3A1): This is the Figma file I worked on to design the website's initial draft.
- [Flexbox CSS Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): I frequently referred to this guide to fix the page's layout.
- [webdesign.tutplus.com](https://webdesign.tutsplus.com/articles/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953): I used this guide to create the day/night mode toggle switch UI.
- [JS Confetti Library](https://github.com/loonywizard/js-confetti#readme): I used this JS library to add emoji confetti after a game ends.
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   
   One challenge I encountered was storing and fetching the user's score in-between the two pages. In my website, I have the home page where the game is, and another leaderboard page. 
   I wanted to keep the user's score when the switched between pages. At first I tried to use URL parameters, but I realized that this was not the most secure solution because users can type out the URL and fake their own scores.
   I did more research and that's how I learned about local storage. Since it was my first time implementing this, I had some confusion about how to implement the storage and test if it worked.
   What helped me a lot in debugging was using Developer Tools and printing out values in the console. In the end, I was able to solve my problem, and this allowed me to complete other features like the leaderboard.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   
   I personally enjoy web development a lot, especially the front-end aspect where I can become more creative.
   So I am very interested in what web development as a career is like, and what sorts of tasks web developers do on a daily basis.
   In a project like this, it was simple to see the "ending", where no improvements is really necessary and the project is considered finished. 
   I want to learn more about what it takes to maintain a website, as well as learn what goes "behind-the-scenes" like on the server side. 
   I looked a little bit about security (like the risks of using unencrypted URL parameters) as I coded my project, but I want to also learn what other concepts a "good" web developer must stay conscientious of when doing their job.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had more time to work on this project, I would add more features to add complexity to the game and add shareable messages/links.
   
   For example, before each game starts, I can add the option for users to choose between Easy, Medium, and Hard difficulty levels. 
   This entails changing time/speed variables and spawning a certain number of buttons for each difficulty level.
   
   I also want to add an option to share your statistics, like Wordle. I think this would be a fun addition since it encourages more interaction among players. 
   It would also be interesting to allow users to create their own patterns, and share a link so that other players can try it out.
   
   Another idea I wish to implement was to design a rhythm-game-like gameplay where users must click the buttons at a certain beat. 
   Much like Beat Saber (a popular VR rhythm game) or Dance Dance Revolution, the user can choose between different songs and beats to play. 
   I think that the project provided a good base for developing a more complex game like this.
   However, creating a game like DDR would involve many changes to the code, including mapping out unique patterns for each song and adding more game functions. 
   If I only had a few hours, I think I would spend it researching how to measure rhythm in the game and how to add it as an extra parameter in the win function.
   
  
   


## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/KWm9S9YpLRU)

## License

    Copyright Jiliana Tiu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

document.addEventListener('DOMContentLoaded', () => {
    // Timer functionality
    let timerElement = document.getElementById('timer');
    let startStopButton = document.getElementById('start-stop');
    let resetButton = document.getElementById('reset');

    let totalTime = 25 * 60; // 25 minutes in seconds
    let remainingTime = totalTime;
    let intervalId;
    let isRunning = false;

    function updateTimerDisplay() {
        let hours = Math.floor(remainingTime / 3600);
        let minutes = Math.floor((remainingTime % 3600) / 60);
        let seconds = remainingTime % 60;

        timerElement.textContent = 
            `${hours.toString().padStart(2, '0')}:` +
            `${minutes.toString().padStart(2, '0')}:` +
            `${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        intervalId = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateTimerDisplay();
            } else {
                clearInterval(intervalId);
                isRunning = false;
                startStopButton.textContent = 'Start';
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(intervalId);
    }

    startStopButton.addEventListener('click', () => {
        if (isRunning) {
            stopTimer();
            startStopButton.textContent = 'Resume';
        } else {
            startTimer();
            startStopButton.textContent = 'Stop';
        }
        isRunning = !isRunning;
    });

    resetButton.addEventListener('click', () => {
        stopTimer();
        remainingTime = totalTime;
        updateTimerDisplay();
        isRunning = false;
        startStopButton.textContent = 'Start';
    });

    updateTimerDisplay();

    // To-do list functionality
    const inputBox = document.getElementById('input-box');
    const addButton = document.getElementById('add-button');
    const list = document.getElementById('list-container');

    function addTask() {
        if (inputBox.value === '') {
            alert('You must write something!');
        } else {
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            list.appendChild(li);
            inputBox.value = '';
            let span = document.createElement('span');
            span.innerHTML = 'x';
            li.appendChild(span);
        }
        saveData();
    }

    list.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveData();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData();
        }
    });

    addButton.addEventListener('click', addTask);

    function saveData() {
        localStorage.setItem('data', list.innerHTML);
    }

    function showTask() {
        const savedData = localStorage.getItem('data');
        if (savedData) {
            list.innerHTML = savedData;
        }
    }

    showTask();
});


document.addEventListener('DOMContentLoaded', () => {
    const volumeSliders = document.querySelectorAll('.volume-slider');
    const volumeSliderFills = document.querySelectorAll('.volume-slider-fill');
    const audios = document.querySelectorAll('audio');
    const playButtons = document.querySelectorAll('.play-button');

    volumeSliders.forEach((slider, index) => {
        const audio = audios[index];

        slider.addEventListener('input', () => {
            audio.volume = slider.value;
            volumeSliderFills[index].style.width = `${slider.value * 100}%`;
        });

        audio.addEventListener('loadedmetadata', () => {
            slider.value = audio.volume;
            volumeSliderFills[index].style.width = `${audio.volume * 100}%`;
        });
    });

    playButtons.forEach((button, index) => {
        const audio = audios[index];
        const icon = button.querySelector('i');

        button.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            } else {
                audio.pause();
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        });
    });
});
$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }
// For facebook
var fbShare = document.querySelector('#fb');




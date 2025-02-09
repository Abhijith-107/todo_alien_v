document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            };
        }

        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            };
        }

        document.querySelector("#newtask input").value = "";
    }
};

// Alien Invasion
let alienCount = 1; // Start with 1 alien

function spawnAliens() {
    for (let i = 0; i < alienCount; i++) {
        let alien = document.createElement('div');
        alien.classList.add('alien');
        alien.innerHTML = '👽';

        // Random starting position
        let startX = Math.random() * (window.innerWidth - 50);
        let startY = Math.random() * (window.innerHeight - 50);
        alien.style.left = `${startX}px`;
        alien.style.top = `${startY}px`;

        // Random animation duration (so they move at different speeds)
        let duration = Math.random() * 5 + 5; // Between 5s to 10s
        alien.style.animationDuration = `${duration}s`;

        document.body.appendChild(alien);
    }

    alienCount++; // Increase alien count every 10s
}

// Run alien every 10 seconds
setInterval(spawnAliens, 10000);

// Start with the first alien immediately
spawnAliens();

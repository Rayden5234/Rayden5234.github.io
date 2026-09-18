$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 250, 100, 10, "blue")
    createPlatform(600, 650, 200, 50, "red")
    createPlatform(900, 550, 100, 25, "green")
    createPlatform(510, 450, 200, 15, "yellow")
    createPlatform(1200, 450, 250, 10, "pink")
    createPlatform(1000, 550, 10, 150, "purple")
    createPlatform(1200, 650, 300, 50, "cyan")
    createPlatform(0, 525, 430, 10, "brown")
    createPlatform(850, 320, 200, 40, "black")
    createPlatform(940, 0, 25, 320, "orange")
    createPlatform(420, 525, 10, 120)



    // TODO 3 - Create Collectables
    createCollectable("database", 530, 200)
    createCollectable("diamond", 1270, 600)
    createCollectable("grace", 1200, 150)
    createCollectable("kennedi", 35, 600)
    createCollectable("max", 950, 600)
    createCollectable("steve", 580, 400)


    
    // TODO 4 - Create Cannons
    createCannon("right", 450, 2000)
    createCannon("bottom",775, 2300)
    createCannon("top", 500, 3000)
    createCannon("left", 660, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

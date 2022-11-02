<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Markable Calendar</title>

        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <script src="./js/jquery-3.6.0.min.js"></script>
        <script src="./js/script.js" defer></script>
    </head>
    <body>

        <div class="container">
            <header>
                <div>
                    <span class="material-symbols-outlined">chevron_left</span>
                </div>
                <div>
                    <p>Outubro de 2022</p>
                </div>
                <div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </div>
            </header>
            <div class="calendar">
                <div class="weeks">
                    <ul>
                        <li>Dom</li>
                        <li>Seg</li>
                        <li>Ter</li>
                        <li>Qua</li>
                        <li>Qui</li>
                        <li>Sex</li>
                        <li>Sab</li>
                    </ul>
                </div>
                <div class="days">
                    <ul>
                    </ul>
                </div>
                
            </div>
            <div>
                <button type="button" class="btn" onclick="submitChanges()">Salvar</button>
            </div>

            <footer>
                <p>By <strong>Adão Pedro</strong></p>
            </footer>
        </div>

    </body>
</html>
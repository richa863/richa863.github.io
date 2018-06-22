$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            //				$('.timer').html(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };
    $(document).ready(function () {
        let indexQ = 0;
        let timer = {
            time: 10,
            reset: () => {
                this.time = 10;
                $(".timer").html()
            }
        }
    }

    )

    var correct = 0;
    var wrong = 0;
    var q1 = {
        image: '300px-The_office_US.jpg',
        question: 'Who is the character that appears in the most episodes of "The Office"',
        possibleAnswers: ['A. Phyllis',
            'B. Michael',
            'C. Toby',
            'D. Jim'],
        flags: [false, false, true, false],
        answer: 'C. Toby'
    };

    var q2 = {
        image: 'The_Office_(US).png',
        question: 'Who burned their cheesy-pita in the toaster oven?',
        possibleAnswers: ['A. Michael',
            'B. Ryan',
            'C. Jan',
            'D. Oscar'],
        flags: [false, true, false, false],
        answer: 'B. Ryan'
    };

    var q3 = {
        image: 'TheOfficebyMitchellHaasethNBCHeader.jpg',
        question: 'In "The Deposition" whose diary is brought as evidence?',
        possibleAnswers: ['A. Jan',
            'B. Michael',
            'C. Oscar',
            'D. Bob Vance, Vance Refrigeration'],
        flags: [false, true, false, false],
        answer: 'B. Michael'
    };

    var q4 = {
        image: 'Screen-Shot-2017-06-09-at-3.32.10-PM-660x400.png',
        question: 'What actor, who played the boss in "The Office," also played the boss in "The Wire"?',
        possibleAnswers: ['A. Idris Elba',
            'B. John Kraszinski',
            'C. Creed Bratton',
            'D. Steve Carrell'],
        flags: [true, false, false, false],
        answer: 'A. Idris Elba'
    };

    var q5 = {
        image: 'o-the-office-finale-facebook-1.jpg',
        question: 'According to Dwight, what can climb faster than they can run?',
        possibleAnswers: ['A. Squirrels',
            'B. Bears',
            'C. Chimpanzees',
            'D. Orangutans'],
        flags: [false, true, false, false],
        answer: 'B. Bears'
    };

    var q6 = {
        image: 'maxresdefault(1).jpg',
        question: 'Where did Jan and Michael go for their secret vacation?',
        possibleAnswers: ['A. Jamaica',
            'B. The Fingerlakes',
            'C. Carbondale',
            'D. Cancun'],
        flags: [true, false, false, false],
        answer: 'A. Jamaica'
    };

    var q7 = {
        image: 'images(1).jpeg',
        question: 'According to Andy, what school "is the highest rank in the Ivy League"?',
        possibleAnswers: ['A. Harvard',
            'B. Yale',
            'C. Cornel',
            'D. Johns Hopkins'],
        flags: [false, false, true, false],
        answer: 'C. Cornel'
    };

    var q8 = {
        image: 'images(2).jpeg',
        question: 'What character is played by a real life rock and roller from the 1970s?',
        possibleAnswers: ['A. Kevin',
            'B. Creed',
            'C. Jim',
            'D. Darryl'],
        flags: [false, true, false, false],
        answer: 'B. Creed'
    };

    var q9 = {
        image: 'images.jpeg',
        question: "What was Michael's dreamgirl modeling in the catalog?",
        possibleAnswers: ['A. Shoes',
            'B. Gloves',
            'C. Kitchen Appliances',
            'D. Chairs'],
        flags: [false, false, false, true],
        answer: 'D. Chairs'
    };

    var q10 = {
        image: 'HlfZadU7_400x400.jpg',
        question: 'What is Creeds role at Dunder Mifflin?',
        possibleAnswers: ['A. Customer Relations',
            'B. Quality Assurance',
            'C. Salesman',
            'D. Supplier Relations'],
        flags: [false, true, false, false],
        answer: 'B. Quality Assurance'
    }

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $(".qImage").html("<img align=middle src=Assets/Images/" + questionArray[questionSelection].image + ">");
        $("#a").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#b").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#c").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#d").text(questionArray[questionSelection].possibleAnswers[3]).show();

    }


    function setup() {
        index = 0;
        $('.question').append('<button class="btn btn-success" id="startButton">Start</button>');
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {


        $('.answerchoice').on('click', function () {
            console.log('alert', index);
            index++;
            console.log('click', index);
            $(".qImage").clear
            $(".question").text('');
            $("#a").text('');
            $("#b").text('');
            $("#c").text('');
            $("#d").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        function play_single_sound() {
            $('#audiotag1').playclip()};
        correct++;
        alert("That's What She Said!");
        console.log("correct");
        
    }

    function answerWrong() {
        wrong++;
        function play_single_sound() {
            document.getElementById('audiotag2')[0].play()};
        alert("Please talk to Toby in HR.");
        console.log("wrong");
        
    }

    function showScore() {
        function play_single_sound() {
            document.getElementById('audiotag3').play()};
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }

    setup();
    $('.playerinput').on('click', function () {
        console.log($(this));
        if (this.id == 'a') {
            var answerChosen = 'A';
        } else if (this.id == 'b') {
            answerChosen = 'B';
        } else if (this.id == 'c') {
            answerChosen = 'C';
        } else if (this.id == 'd') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#a").text('');
        $("#b").text('');
        $("#c").text('');
        $("#d").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
    });



});
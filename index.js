let score =
            JSON.parse(localStorage.getItem('score')) ||{
                wins: 0,
                losses : 0,
                ties: 0 
            } ;
        // if (!score)
        // {
        //     score = {
        //         wins: 0,
        //         losses : 0,
        //         ties: 0 
        //     }
        // }
        
        upadatescoreElement();

        function playGame(playerMove)
        {
            const computer_move =   pickComputerMove();
            let result = '' ;
           if(playerMove === 'scissors')
           {
            if (computer_move === 'rock')
            {
                result = 'you lose' ;
            }
            else if (computer_move === 'paper')
            {
                result = 'you win';
            }
            else if (computer_move === 'scissors')
            { 
                result = 'tie';
            }
           }
           
           else if (playerMove == 'paper')
           {
            if (computer_move === 'rock')
            {
                result = 'you win' ;
            }
            else if (computer_move === 'paper')
            {
                result = 'tie';
            }
            else if (computer_move === 'scissors')
            {
                result = 'you lose';
            }
           }

           else{
            if (computer_move === 'rock')
            {
                result = 'tie' ;
            }
            else if (computer_move === 'paper')
            {
                result = 'you lose';
            }
            else if (computer_move === 'scissors') // coercion ===   == 65 'A'
            {
                result = 'you win';
            }
           }

           if (result === 'you win')
           {
             score.wins++ ;
           }
           else if (result === 'you lose')
           {
            score.losses++ ;
           }
           else{
            score.ties++ ;
           }

           localStorage.setItem('score',JSON.stringify(score));
        //    updateresultElement();
           upadatescoreElement();
           document.querySelector('.js-result').innerHTML= result;
           document.querySelector('.js-move').innerHTML = `You 
        <img src="images/${playerMove}-emoji.png" >
        <img src="images/${computer_move}-emoji.png">
        Computer   `;
            // alert(`you picked ${playerMove} computer chooses ${computer_move} , ${result}  Wins: ${score.wins} , Losses : ${score.losses} , Ties: ${score.ties}
            // `);
        }
        function upadatescoreElement()
        {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses : ${score.losses} , Ties: ${score.ties}`;
        }
        // function updateresultElement(){
        //     document.querySelector('.js-result').innerHTML = result;
        // }
 

        let computer_move = '';
        function pickComputerMove()
    {
        const rnum = Math.random() ;
        
        if (rnum >=0 && rnum < 1/3)
        {
            computer_move = 'rock';
        }
        else  if (rnum >= 1/3 && rnum < 2/3)
        {
            computer_move = 'paper';
        }
        else if (rnum >= 2/3 && rnum <= 1)
        {
            computer_move = 'scissors';
        }
        return  computer_move ;
    }
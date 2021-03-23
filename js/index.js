



let nowPlaying = [];
let popular = [];
let topRated = [];
let trending = [];
let upComing = [];
let getMoviesWorld = [];

let movies = [];


//get movies by world
let inputGetMovieWorld = $("#inputGetMovieWorld");

async function getWorld(term){

    let apiRespons = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cc36b5f55320505764fba1af36ec558b&query=${term}&fbclid=IwAR00HrrSOZEW_ZEwc6NzA5TvxdxdIKQAlOkjLesTF3-fgHYigJNb2aMQEyk`)
    let allJson = await apiRespons.json();
    getMoviesWorld = allJson.results;
    
    displayWorldMovies();
    movies = getMoviesWorld;
    
}
$(inputGetMovieWorld).keyup( function(){

    inputGetMovieWorld = $("#inputGetMovieWorld").val();

    if( inputGetMovieWorld == "" )
    {

    }
    else
    {
        getWorld(inputGetMovieWorld);
    }
    
})


function displayWorldMovies(){

    let cartoona = ``;

    for( let i=0 ; i<getMoviesWorld.length ; i++)
    {
        cartoona +=`
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="post mb-5 position-relative text-center overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${getMoviesWorld[i].poster_path}">
                <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                <h3>${getMoviesWorld[i].original_title}</h3>
                <p>${getMoviesWorld[i].overview}</p>
                <p>rate: ${getMoviesWorld[i].vote_average}</p>
                <p>${getMoviesWorld[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("myMovies").innerHTML = cartoona;
}










//nowPlaying
async function getNowPlaying(){

    let apiRespons = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=f1aca93e54807386df3f6972a5c33b50`)
    let allJson = await apiRespons.json();
    nowPlaying = allJson.results;
    
    $("#nowplaying").click( function(){

        displayNowPlaying();
        movies = nowPlaying;
    })
    displayNowPlaying();
    movies = nowPlaying;
}
getNowPlaying();

function displayNowPlaying(){

    let cartoona = ``;

    for( let i=0 ; i<nowPlaying.length ; i++)
    {
        cartoona +=`
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="post mb-5 position-relative text-center overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${nowPlaying[i].poster_path}">
                <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                <h3>${nowPlaying[i].original_title}</h3>
                <p>${nowPlaying[i].overview}</p>
                <p>rate: ${nowPlaying[i].vote_average}</p>
                <p>${nowPlaying[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("myMovies").innerHTML = cartoona;
}



//popular
async function getPopular(){

    let apiRespons = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50`)
    let allJson = await apiRespons.json();
    popular = allJson.results;
    
    
    $("#popular").click( function(){
    
        displayPopular();
        movies = popular;
    })
}
getPopular();


function displayPopular(){

    let cartoona = ``;

    for( let i=0 ; i<popular.length ; i++)
    {
        cartoona +=`
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="post mb-5 position-relative text-center overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${popular[i].poster_path}">
                <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                <h3>${popular[i].original_title}</h3>
                <p>${popular[i].overview}</p>
                <p>rate: ${popular[i].vote_average}</p>
                <p>${popular[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("myMovies").innerHTML = cartoona;

}




//topRated
async function getTopRated(){

    let apiRespons = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f1aca93e54807386df3f6972a5c33b50`)
    let allJson = await apiRespons.json();
    topRated = allJson.results;
    
    $("#topRated").click( function(){

        displayTopRated();
        movies = topRated;
    })
}
getTopRated();

function displayTopRated(){

    let cartoona = ``;

    for( let i=0 ; i<topRated.length ; i++)
    {
        cartoona +=`
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="post mb-5 position-relative text-center overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${topRated[i].poster_path}">
                <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                <h3>${topRated[i].original_title}</h3>
                <p>${topRated[i].overview}</p>
                <p>rate: ${topRated[i].vote_average}</p>
                <p>${topRated[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("myMovies").innerHTML = cartoona;

}




//trending
async function getTrending(){

    let apiRespons = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f1aca93e54807386df3f6972a5c33b50`)
    let allJson = await apiRespons.json();
    trending = allJson.results;
    
    $("#trending").click( function(){

        displayTrending();
        movies = trending;
    })
}
getTrending();

function displayTrending(){

    let cartoona = ``;

    for( let i=0 ; i<trending.length ; i++)
    {
        cartoona +=`
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="post mb-5 position-relative text-center overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}">
                <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                <h3>${trending[i].original_title||trending[i].original_name}</h3>
                <p>${trending[i].overview}</p>
                <p>rate: ${trending[i].vote_average}</p>
                <p>${trending[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("myMovies").innerHTML = cartoona;

}



//upComing
async function getUpComing(){

    let apiRespons = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f1aca93e54807386df3f6972a5c33b50`)
    let allJson = await apiRespons.json();
    upComing = allJson.results;
    
    $("#upComing").click( function(){

        displayUpComing();
        movies = upComing;
    })
}
getUpComing();

function displayUpComing(){

    let cartoona = ``;

    for( let i=0 ; i<upComing.length ; i++)
    {
        cartoona +=`
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="post mb-5 position-relative text-center overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${upComing[i].poster_path}">
                <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                <h3>${upComing[i].original_title}</h3>
                <p>${upComing[i].overview}</p>
                <p>rate: ${upComing[i].vote_average}</p>
                <p>${upComing[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("myMovies").innerHTML = cartoona;

}





//search
$("#searchInput").keyup( function(){


    let serachInputValue = $("#searchInput").val();

    let cartoona = ``;
    let cartoona1 = ``;


    for( let i=0 ; i<movies.length ; i++)
    {
        if( movies[i].original_title||trending[i].original_name.includes(serachInputValue)  )
        {
            cartoona +=`
            <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="post mb-5 position-relative text-center overflow-hidden">
                    <img class="w-100" src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}">
                    <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                    <h3>${movies[i].original_title||trending[i].original_name}</h3>
                    <p>${movies[i].overview}</p>
                    <p>rate: ${movies[i].vote_average}</p>
                    <p>${movies[i].release_date}</p>
                    </div>
                </div>
            </div>`
        }
        cartoona1 +=`
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="post mb-5 position-relative text-center overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}">
                <div class="post-item bg-white text-black d-flex flex-column justify-content-center">
                <h3>${movies[i].original_title}</h3>
                <p>${movies[i].overview}</p>
                <p>rate: ${movies[i].vote_average}</p>
                <p>${movies[i].release_date}</p>
                </div>
            </div>
        </div>`
        if( serachInputValue == "")
        {
            document.getElementById("myMovies1").innerHTML = "";
        }
        else
        {
            document.getElementById("myMovies1").innerHTML = cartoona1;
        }
    }
    
    
    document.getElementById("myMovies").innerHTML = cartoona;
    
    
});







let nameInput = $("#nameInput");
let regexName = /^[a-z 0-9]/;
let nameAlert = document.getElementById("nameAlert");
$(nameInput).keyup( function(){

    nameInput = $("#nameInput").val();
    
    if( regexName.test(nameInput) == true )
    {
        nameAlert.classList.replace("d-flex", "d-none");
        
    }
    else
    {
        nameAlert.classList.replace("d-none", "d-flex");
        
    }

});


let emailInput = $("#emailInput");
let regexEmail = /^([a-z 0-9]){1,20}@[a-z]{1,9}(.com)$/;
let emailAlert = document.getElementById("emailAlert");
$(emailInput).keyup( function(){

    emailInput = $("#emailInput").val();
    
    if( regexEmail.test(emailInput) == true )
    {
        emailAlert.classList.replace("d-flex", "d-none");
        
    }
    else
    {
        emailAlert.classList.replace("d-none", "d-flex");
        
    }

});



let phoneInput = $("#phoneInput");
let regexPhone = /^(002|\+2)?01[0125][0-9]{8}$/;
let phoneAlert = document.getElementById("phoneAlert");
$(phoneInput).keyup( function(){

    phoneInput = $("#phoneInput").val();
    
    if( regexPhone.test(phoneInput) == true )
    {
        phoneAlert.classList.replace("d-flex", "d-none");
    }
    else
    {
        phoneAlert.classList.replace("d-none", "d-flex");
    }

});



let ageInput = $("#ageInput");
let regexAge = /^([1-9][0-9]|[1-9]|100)$/;
let ageAlert = document.getElementById("ageAlert");
$(ageInput).keyup( function(){

    ageInput = $("#ageInput").val();

    if( regexAge.test(ageInput) == true )
    {
        ageAlert.classList.replace("d-flex", "d-none");
        
    }
    else
    {
        ageAlert.classList.replace("d-none", "d-flex");
        
    }

});



let passwordInput = $("#passwordInput");
let regexPassword = /[0-9a-z]{7,25}[a-z0-9]{1,15}/;
let passwordAlert = document.getElementById("passwordAlert");
$(passwordInput).keyup( function passwordValid(){

    passwordInput = $("#passwordInput").val();

    if( regexPassword.test(passwordInput) == true )
    {
        passwordAlert.classList.replace("d-flex", "d-none");
    }
    else
    {
        passwordAlert.classList.replace("d-none", "d-flex");
    }
});

let rePasswordAlert = document.getElementById("rePasswordAlert");
$(rePasswordInput).keyup( function(){

    passwordInput = $("#passwordInput").val();
    rePasswordInput = $("#rePasswordInput").val();
    
    if( rePasswordInput == passwordInput )
    {
        rePasswordAlert.classList.replace("d-flex", "d-none");
        
    }
    else
    {
        rePasswordAlert.classList.replace("d-none", "d-flex");
        
    }
})





let inputs = document.querySelectorAll("#contactUs input");
let divDisabled = document.getElementById("divDisabled");
let btnSubmit = document.getElementById("btnSubmit");

for(let i=0 ; i<inputs.length ; i++)
{
    inputs[i].addEventListener("keyup" , function(){

        if( regexName.test(nameInput) == true && regexEmail.test(emailInput) == true && regexPhone.test(phoneInput) == true && 
            regexAge.test(ageInput) == true && regexPassword.test(passwordInput) == true && rePasswordInput == passwordInput )
        {
            divDisabled.style.zIndex = '-1';
            btnSubmit.classList.remove("disabled");
        }
        else
        {
            divDisabled.style.zIndex = '1';
            btnSubmit.classList.add("disabled");
        }

    })
}




let openNav = document.getElementById("openNav");
let closeNav = document.getElementById("closeNav");
let bodyWidth = $(".nav-body").innerWidth();
$("#nowplaying").css({top: '100%' , transition: 'top .5s .6s'} , 0);
$("#popular").css({top: '100%' , transition: 'top .5s .5s'} , 0);
$("#topRated").css({top: '100%' , transition: 'top .5s .4s'} , 0);
$("#trending").css({top: '100%' , transition: 'top .5s .3s'} , 0);
$("#upComing").css({top: '100%' , transition: 'top .5s .2s'} , 0);
$("#btnContactUs").css({top: '100%' , transition: 'top .5s .1s'} , 0);

$(".nav-bar").animate({left:`-${bodyWidth}`} ,0);

$("#openNav").click( function(){

    
    $(".nav-bar").animate({left:`0`} , 500);

    openNav.classList.replace("d-flex" , "d-none");
    closeNav.classList.replace("d-none" , "d-flex");


    $("#nowplaying").css({top: '0' , transition: 'top .5s .4s'} , 1000);
    $("#popular").css({top: '15%' , transition: 'top .5s .5s'} , 1000);
    $("#topRated").css({top: '30%' , transition: 'top .5s .6s'} , 1000);
    $("#trending").css({top: '47%' , transition: 'top .5s .7s'} , 1000);
    $("#upComing").css({top: '65%' , transition: 'top .5s .8s'} , 1000);
    $("#btnContactUs").css({top: '85%' , transition: 'top .5s .9s'} , 1000);
    
    
});
$("#closeNav").click( function(){

    
    $(".nav-bar").animate({left:`-${bodyWidth}`} , 700);

    openNav.classList.replace("d-none" , "d-flex");
    closeNav.classList.replace("d-flex" , "d-none");

    $("#nowplaying").css({top: '100%' , transition: 'top .5s .5s'} , 500);
    $("#popular").css({top: '100%' , transition: 'top .5s .4s'} , 500);
    $("#topRated").css({top: '100%' , transition: 'top .5s .3s'} , 500);
    $("#trending").css({top: '100%' , transition: 'top .5s .2s'} , 500);
    $("#upComing").css({top: '100%' , transition: 'top .5s .1s'} , 500);
    $("#btnContactUs").css({top: '100%' , transition: 'top .5s .0s'} , 500);

});

$("a[href^='#c']").click( function(e){

    let href = $(e.target).attr("href");
    let sectionOffset = $(href).offset().top;

    $("html , body").animate({scrollTop: sectionOffset} , 1500)
});






let textGetMovieWorld = document.getElementById("textGetMovieWorld");

$(inputGetMovieWorld).keyup( function(){

    inputGetMovieWorld = $("#inputGetMovieWorld").val();
    if( inputGetMovieWorld == "" )
    {
        textGetMovieWorld.classList.replace("d-none" , "d-flex");
    }
    else
    {
        textGetMovieWorld.classList.replace("d-flex" , "d-none");
    }
});

let searchInput = $("#searchInput");
let textSearch = document.getElementById("textSearch");

$(searchInput).keyup( function(){

    searchInput = $("#searchInput").val();
    if( searchInput == "" )
    {
        textSearch.classList.replace("d-none" , "d-flex");
    }
    else
    {
        textSearch.classList.replace("d-flex" , "d-none");
    }
});



var player1=window.prompt("Player 1");
var player2=window.prompt("Player 2");
var r=false;

function newgame()
{
	//enable all buttons
	//replace all buttons by _ again
	//replace heading back to tic tac toe
	//call turn	
	//document.getElementsByTagName('button').disabled=false;      WHY???

	document.querySelector('#p00').disabled=false;
	document.querySelector('#p00').innerHTML="_";
	document.querySelector('#p01').disabled=false;
	document.querySelector('#p01').innerHTML="_";
	document.querySelector('#p02').disabled=false;
	document.querySelector('#p02').innerHTML="_";
	document.querySelector('#p10').disabled=false;
	document.querySelector('#p10').innerHTML="_";
	document.querySelector('#p11').disabled=false;
	document.querySelector('#p11').innerHTML="_";
	document.querySelector('#p12').disabled=false;
	document.querySelector('#p12').innerHTML="_";
	document.querySelector('#p20').disabled=false;
	document.querySelector('#p20').innerHTML="_";
	document.querySelector('#p21').disabled=false;
	document.querySelector('#p21').innerHTML="_";
	document.querySelector('#p22').disabled=false;
	document.querySelector('#p22').innerHTML="_";

	document.getElementById('title').innerHTML="Tic Tac Toe";
	
	player1=window.prompt("player1");
	player2=window.prompt("player2");

	turn();

}

function turn()
{
	if(r==false)
	{
	document.getElementById('turn').innerHTML=player1+"'s Turn";
	}
	else
	{
	document.getElementById('turn').innerHTML=player2+"'s Turn";
	}
}

function tick(ids)
{
	
	if(r==false)
	{
		document.getElementById(ids).innerHTML="X";
		document.getElementById(ids).disabled=true;
		r=true;
	}
	else
	{
		document.getElementById(ids).innerHTML="O";
		document.getElementById(ids).disabled=true;
		r=false;
	}
	turn();
	check();
}

var a,b,c,d,e,f,x,y,z,u,v,w;


function check(){

	var block=[[document.getElementById('p00').textContent,document.getElementById('p01').textContent,document.getElementById('p02').textContent],
	[document.getElementById('p10').textContent,document.getElementById('p11').textContent,document.getElementById('p12').textContent],
	[document.getElementById('p20').textContent,document.getElementById('p21').textContent,document.getElementById('p22').textContent]];

	/*
	0,0  0,1  0,2
	1,0  1,1  1,2
	2,0  2,1  2,2
	*/

	for(var i=0;i<3;i++)
	{
		for(var j=0;j<3;j++) 
		{
			if(j==0)
			{
				a=block[i][j];
				d=block[j][i];
				/*if(i==j)
				{
					x=block[i][i];
				}*/
			}
			else if (j==1) 
			{
				b=block[i][j];
				e=block[j][i];
				/*if(i==j)
				{
					y=block[i][i];
				}*/
			}
			else if (j==2) 
			{
				c=block[i][j];
				f=block[j][i];
				/*if(i==j)
				{
					z=block[i][i];
				}*/
			}

	}

//for checking top to bottom cross

	var p,q;
	for(p=0,q=0;p<3 && q<3;p++,q++)
	{
		if(q==0)
			x=block[p][q];
		else if(q==1)
			y=block[p][q];
		else if(q==2)
			z=block[p][q];
	}
//for checking bottom to top cross
	for(p=0,q=2;p<3 && q>=0 ; p++,q--)
	{
		if(p==0)
			u=block[p][q];
		else if(p==1)
			v=block[p][q];
		else if(p==2)
			w=block[p][q];
	}


		if((a==b && b==c && c==a))// || (d==e && e==f && f==d) || (x==y && y==z && z==x))//|| (u==v && v==w && w==u))
		{
			if(a=='X')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player1+" won";
			}
			else if(a=='O')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player2+" won";
			}
		}

		else if((d==e && e==f && f==d))
		{
			if(d=='X')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player1+" won";
			}
			else if(d=='O')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player2+" won";
			}
		}
		else if(x==y && y==z && z==x)
		{
			if(x=='X')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player1+" won";
			}
			else if(x=='O')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player2+" won";
			}
		}

		else if(u==v && v==w && w==u)
		{
			if(u=='X')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player1+" won";
			}
			else if(u=='O')
			{
			document.getElementById('title').innerHTML="Wohooo!!!";
			document.getElementById('turn').innerHTML=player2+" won";
			}
		}

	}

}

//on its own...if the player 1 wins ..that means player 1 played the last turn .. so in the new game next turn will be given to player 2...and also can take 
//other input names
//ask anshu how to manage new game ..can we take the pointer to the initial position so that the variable r can be reinitialised to false...also it
//can reduce the code under new game.
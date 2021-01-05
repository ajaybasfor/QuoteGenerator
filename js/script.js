function generate_quote(){
	var quotes = [

	"Love For All, Hatred For None. – Khalifatul Masih III",
	"Change the world by being yourself. – Amy Poehler",
	"Whatever you do, do it well. – Walt Disney",
	"One day the people that don’t even believe in you will tell everyone how they met you. – Johnny Depp",
	"If I’m gonna tell a real story, I’m gonna start with my name. – Kendrick Lamar",
	"Have enough courage to start and enough heart to finish. – Jessica N. S. Yourko",
	"I could agree with you but then we’d both be wrong. – Harvey Specter",
	"The time is always right to do what is right. – Martin Luther King Jr.",
	"You have succeeded in life when all you really want is only what you really need. – Vernon Howard",
	"Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like. – Will Rogers",
	"It is preoccupation with possession, more than anything else, that prevents men from living freely and nobly.  – Bertrand Russell",
	"The only joy in the world is to begin. – Cesare Pavese",
	"The two enemies of human happiness are pain and boredom. – Arthur Schopenhauer",
	"For many men, the acquisition of wealth does not end their troubles, it only changes them.– Seneca",
	"There are more things to alarm us than to harm us, and we suffer more often in apprehension than reality.– Seneca",
	"It's been my experience that you can nearly always enjoy things if you make up your mind firmly that you will. – L.M. Montgomery",
	"Happiness is nothing more than good health and a bad memory. – Albert Schweitzer",
	"If I had a flower for every time I thought of you… I could walk through my garden forever. – Alfred Tennyson",
	"The most important thing in life is to learn how to give out love, and to let it come in.–Morrie Schwartz",
	"If you would be loved, love, and be loveable.– Benjamin Franklin",
	"The best proof of love is trust. – Joyce Brothers",
	"Hate comes from intimidation, love comes from appreciation. – Tyga",
	"I could agree with you but then we’d both be wrong. – Harvey Specter",
	"Oh, the things you can find, if you don’t stay behind. – Dr. Seuss",
	"Determine your priorities and focus on them. – Eileen McDargh",
	"Be so good they can’t ignore you. – Steve Martin",
	"Yesterday you said tomorrow. Just do it. – Nike",
	"What consumes your mind controls your life- Unknown",
	"Wanting to be someone else is a waste of who you are. – Kurt Cobain"
	];
	let randomnumber = Math.floor(Math.random() * (quotes.length));
	let author = quotes[randomnumber].split("–");
	document.getElementById("quote").innerHTML = author[0];
	document.getElementById("author_name").innerHTML = author[1];
}
const potentialAnswers = {
  "NFL": [
    ["Emmitt Smith", "Walter Payton", "Barry Sanders", "Jim Brown", "Adrian Peterson", "Frank Gore", "LaDainian Tomlinson", "Eric Dickerson", "Tony Dorsett", "Marshawn Lynch"],
    ["Tom Brady", "Joe Montana", "Terry Bradshaw", "Peyton Manning", "John Elway", "Ben Roethlisberger", "Eli Manning", "Joe Flacco", "Patrick Mahomes", "Brett Favre"],
    ["New England Patriots", "Dallas Cowboys", "Pittsburgh Steelers", "San Francisco 49ers", "Denver Broncos", "Washington Commanders", "Green Bay Packers", "Miami Dolphins", "Philadelphia Eagles", "Kansas City Chiefs"],
    ["John Ross", "Chris Johnson", "Xavier Worthy", "Tyreek Hill", "Kalif Raymond", "Darius Shepherd", "Jalen Myrick", "Henry Ruggs III", "Marquise Goodwin", "DeSean Jackson"],
    ["Bruce Smith", "Reggie White", "DeMarcus Ware", "Julius Peppers", "Kevin Greene", "Richard Dent", "Jason Taylor", "Terrell Suggs", "Chris Doleman", "J.J. Watt"],
    ["New England Patriots", "Pittsburgh Steelers", "Green Bay Packers", "Seattle Seahawks", "Philadelphia Eagles", "Indianapolis Colts", "Kansas City Chiefs", "Baltimore Ravens", "San Francisco 49ers", "Dallas Cowboys"],
    ["Patrick Mahomes", "Jalen Hurts", "Joe Burrow", "Josh Allen", "Lamar Jackson", "Dak Prescott", "Aaron Rodgers", "Justin Herbert", "Kyler Murray", "Russell Wilson"],
    ["Peyton Manning", "Patrick Mahomes", "Tom Brady", "Dan Marino", "Drew Brees", "Matt Ryan", "Ben Roethlisberger", "Philip Rivers", "Joe Burrow", "Andrew Luck"],
    ["New England Patriots", "Pittsburgh Steelers", "Denver Broncos", "San Francisco 49ers", "Dallas Cowboys", "Green Bay Packers", "Miami Dolphins", "New York Giants", "Philadelphia Eagles", "Kansas City Chiefs"],
    ["Calvin Johnson", "Jerry Rice", "Randy Moss", "Terrell Owens", "Marvin Harrison", "Steve Smith Sr.", "Larry Fitzgerald", "Andre Johnson", "Julio Jones", "A.J. Green"],
    ["Patrick Mahomes", "Tom Brady", "Aaron Rodgers", "Joe Montana", "Joe Flacco", "Eli Manning", "Russell Wilson", "Ben Roethlisberger", "Kurt Warner", "Steve Young"],
    ["New England Patriots", "Seattle Seahawks", "Green Bay Packers", "Dallas Cowboys", "Pittsburgh Steelers", "Kansas City Chiefs", "Philadelphia Eagles", "San Francisco 49ers", "Baltimore Ravens", "New York Giants"],
    ["Rod Woodson", "Charles Woodson", "Darrelle Revis", "Deion Sanders", "Aqib Talib", "Asante Samuel", "Ed Reed", "Ronnie Lott", "Troy Polamalu", "Ty Law"],
    ["Kansas City Chiefs", "Philadelphia Eagles", "Cincinnati Bengals", "Los Angeles Rams", "San Francisco 49ers", "Buffalo Bills", "Detroit Lions", "Miami Dolphins", "Tampa Bay Buccaneers", "New York Jets"],
    ["Tom Brady", "Peyton Manning", "Brett Favre", "Drew Brees", "Dan Marino", "John Elway", "Ben Roethlisberger", "Philip Rivers", "Matt Ryan", "Aaron Rodgers"],
    ["Adrian Peterson", "Jamal Lewis", "Walter Payton", "O.J. Simpson", "Ahman Green", "Chris Johnson", "DeAngelo Williams", "LeSean McCoy", "Derrick Henry", "Barry Sanders"],
    ["Cleveland Browns", "Detroit Lions", "Houston Texans", "Jacksonville Jaguars", "Arizona Cardinals", "New York Jets", "Buffalo Bills", "Carolina Panthers", "Atlanta Falcons", "Minnesota Vikings"],
    ["Ray Lewis", "Junior Seau", "London Fletcher", "Zach Thomas", "Patrick Willis", "Brian Urlacher", "Derrick Brooks", "Mike Singletary", "Luke Kuechly", "Bobby Wagner"],
    ["Tom Brady", "Peyton Manning", "Joe Montana", "Brett Favre", "Kurt Warner", "Earl Morrall", "Craig Morton", "Jim Plunkett", "Russell Wilson", "John Elway"],
    ["Chicago Bears", "Green Bay Packers", "New York Giants", "Pittsburgh Steelers", "Dallas Cowboys", "Washington Commanders", "San Francisco 49ers", "Philadelphia Eagles", "Kansas City Chiefs", "Miami Dolphins"],
    ["Devin Hester", "Deion Sanders", "Eric Metcalf", "Darren Sproles", "Josh Cribbs", "Dante Hall", "LeRoy Butler", "Tim Brown", "Desmond Howard", "Tavon Austin"],
    ["Tom Brady", "Peyton Manning", "Brett Favre", "Drew Brees", "Dan Marino", "John Elway", "Ben Roethlisberger", "Philip Rivers", "Matt Ryan", "Aaron Rodgers"],
    ["Adrian Peterson", "LaDainian Tomlinson", "Marshall Faulk", "Walter Payton", "Earl Campbell", "Barry Sanders", "Emmitt Smith", "Terrell Davis", "Shaun Alexander", "Jim Brown"],
    ["San Francisco 49ers", "Dallas Cowboys", "Pittsburgh Steelers", "New York Giants", "Washington Commanders", "Green Bay Packers", "Philadelphia Eagles", "Kansas City Chiefs", "Seattle Seahawks", "New England Patriots"],
    ["Patrick Mahomes", "Joe Burrow", "Josh Allen", "Jalen Hurts", "Lamar Jackson", "Justin Herbert", "Aaron Rodgers", "Russell Wilson", "Dak Prescott", "Kyler Murray"],
    ["Kansas City Chiefs", "San Francisco 49ers", "Philadelphia Eagles", "Green Bay Packers", "Tampa Bay Buccaneers", "Los Angeles Rams", "New York Giants", "Seattle Seahawks", "Baltimore Ravens", "Denver Broncos"],
    ["Jerry Rice", "Randy Moss", "Terrell Owens", "Marvin Harrison", "Cris Carter", "Steve Largent", "Tim Brown", "Don Hutson", "Larry Fitzgerald", "Calvin Johnson"],
    ["Tony Gonzalez", "Peyton Manning", "Bruce Matthews", "Jerry Rice", "Randy Moss", "Terrell Owens", "Marvin Harrison", "Jason Witten", "Kellen Winslow", "Rob Gronkowski"],
    ["New England Patriots", "Miami Dolphins", "Chicago Bears", "San Francisco 49ers", "Dallas Cowboys", "Indianapolis Colts", "Kansas City Chiefs", "Green Bay Packers", "Pittsburgh Steelers", "Philadelphia Eagles"],
    ["Bryce Young", "C.J. Stroud", "Trevor Lawrence", "Joe Burrow", "Kyler Murray", "Baker Mayfield", "Sam Darnold", "Josh Rosen", "Jared Goff", "Carson Wentz"],
    ["Tom Brady", "Peyton Manning", "John Elway", "Brett Favre", "Dan Marino", "Joe Montana", "Ben Roethlisberger", "Eli Manning", "Drew Brees", "Aaron Rodgers"],
    ["Dallas Cowboys", "Green Bay Packers", "Pittsburgh Steelers", "New England Patriots", "San Francisco 49ers", "Miami Dolphins", "Washington Commanders", "Chicago Bears", "Philadelphia Eagles", "Kansas City Chiefs"],
    ["Adam Vinatieri", "Morten Andersen", "Gary Anderson", "Jason Hanson", "John Carney", "Matt Prater", "Robbie Gould", "Sebastian Janikowski", "Phil Dawson", "Justin Tucker"],
    ["Nick Bosa", "T.J. Watt", "Myles Garrett", "Aaron Donald", "Stephon Gilmore", "Jalen Ramsey", "Khalil Mack", "Von Miller", "Joey Bosa", "Micah Parsons"],
    ["New England Patriots", "Pittsburgh Steelers", "San Francisco 49ers", "Dallas Cowboys", "Green Bay Packers", "Philadelphia Eagles", "Kansas City Chiefs", "Seattle Seahawks", "Baltimore Ravens", "New York Giants"],
    ["Emmitt Smith", "LaDainian Tomlinson", "Walter Payton", "Adrian Peterson", "Barry Sanders", "Jim Brown", "Marcus Allen", "Franco Harris", "Thurman Thomas", "Ezekiel Elliott"],
    ["Tom Brady", "Joe Flacco", "Eli Manning", "Peyton Manning", "Joe Montana", "Aaron Rodgers", "Ben Roethlisberger", "Drew Brees", "Russell Wilson", "Patrick Mahomes"],
    ["Denver Broncos", "New England Patriots", "Dallas Cowboys", "San Francisco 49ers", "Miami Dolphins", "Buffalo Bills", "Minnesota Vikings", "Washington Commanders", "Philadelphia Eagles", "Kansas City Chiefs"],
    ["Brian Mitchell", "Devin Hester", "Tim Brown", "Darren Sproles", "Josh Cribbs", "Dante Hall", "Desmond Howard", "Tavon Austin", "DeSean Jackson", "Cordarrelle Patterson"],
    ["Jerry Rice", "Terrell Owens", "Randy Moss", "Marvin Harrison", "Cris Carter", "Steve Largent", "Tim Brown", "Don Hutson", "Larry Fitzgerald", "Calvin Johnson"],
    ["New England Patriots", "Pittsburgh Steelers", "New York Giants", "Baltimore Ravens", "Seattle Seahawks", "Philadelphia Eagles", "Green Bay Packers", "Denver Broncos", "Kansas City Chiefs", "San Francisco 49ers"],
    ["Rod Woodson", "Deion Sanders", "Aqib Talib", "Charles Woodson", "Darrelle Revis", "Ed Reed", "Ronnie Lott", "Troy Polamalu", "Ty Law", "Champ Bailey"],
    ["Aaron Rodgers", "Peyton Manning", "Russell Wilson", "Tom Brady", "Drew Brees", "Patrick Mahomes", "Joe Montana", "Ben Roethlisberger", "Matt Ryan", "Philip Rivers"],
    ["New England Patriots", "Pittsburgh Steelers", "Denver Broncos", "Oakland Raiders", "Indianapolis Colts", "Kansas City Chiefs", "Miami Dolphins", "Buffalo Bills", "Baltimore Ravens", "Cincinnati Bengals"],
    ["Josh Cribbs", "Devin Hester", "Leon Washington", "Cordarrelle Patterson", "Jacoby Ford", "Dante Hall", "Ted Ginn Jr.", "Percy Harvin", "DeSean Jackson", "Tyreek Hill"],
    ["Justin Jefferson", "Ja’Marr Chase", "Garrett Wilson", "Najee Harris", "Penei Sewell", "Micah Parsons", "Rashawn Slater", "Trevor Lawrence", "Kyle Pitts", "Jaylen Waddle"],
    ["New England Patriots", "Indianapolis Colts", "Green Bay Packers", "Philadelphia Eagles", "Seattle Seahawks", "Kansas City Chiefs", "Pittsburgh Steelers", "San Francisco 49ers", "Dallas Cowboys", "Baltimore Ravens"],
    ["Brett Favre", "Tom Brady", "Peyton Manning", "Drew Brees", "Dan Marino", "John Elway", "Ben Roethlisberger", "Philip Rivers", "Matt Ryan", "Aaron Rodgers"],
    ["Tom Brady", "Peyton Manning", "John Elway", "Brett Favre", "Dan Marino", "Joe Montana", "Ben Roethlisberger", "Eli Manning", "Drew Brees", "Aaron Rodgers"],
    ["Denver Broncos", "New England Patriots", "Pittsburgh Steelers", "Kansas City Chiefs", "San Francisco 49ers", "Green Bay Packers", "Dallas Cowboys", "Philadelphia Eagles", "Seattle Seahawks", "Baltimore Ravens"]
  ],
  "Golf": [
    ["Jack Nicklaus", "Tiger Woods", "Arnold Palmer", "Tom Watson", "Gary Player", "Sam Snead", "Ben Hogan", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth"],
    ["14", "13", "12", "15", "16", "10", "8", "20", "18", "11"],
    ["Sam Snead", "Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Ben Hogan", "Phil Mickelson", "Gary Player", "Tom Watson", "Rory McIlroy", "Jordan Spieth"],
    ["Jack Nicklaus", "Tiger Woods", "Gary Player", "Ben Hogan", "Gene Sarazen", "Arnold Palmer", "Tom Watson", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth"],
    ["Jon Rahm", "Brooks Koepka", "Rory McIlroy", "Scottie Scheffler", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa", "Justin Thomas"],
    ["72", "70", "71", "68", "69", "73", "74", "75", "76", "77"],
    ["Brandt Snedeker", "Xander Schauffele", "Rory McIlroy", "Henrik Stenson", "Phil Mickelson", "Justin Rose", "Jordan Spieth", "Dustin Johnson", "Brooks Koepka", "Tiger Woods"],
    ["Jack Nicklaus", "Tiger Woods", "Walter Hagen", "Ben Hogan", "Gary Player", "Tom Watson", "Arnold Palmer", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth"],
    ["400-500 yards", "300-400 yards", "500-600 yards", "200-300 yards", "600-700 yards", "100-200 yards", "700-800 yards", "800-900 yards", "50-100 yards", "900-1000 yards"],
    ["Justin Thomas", "Will Zalatoris", "Mito Pereira", "Rory McIlroy", "Scottie Scheffler", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa"],
    ["Nick Faldo", "Sergio Garcia", "Colin Montgomerie", "Lee Westwood", "Ian Woosnam", "Bernhard Langer", "Seve Ballesteros", "José María Olazábal", "Luke Donald", "Justin Rose"],
    ["Masters", "U.S. Open", "PGA Championship", "The Open Championship", "Players Championship", "FedEx Cup", "Ryder Cup", "Presidents Cup", "Olympic Gold", "World Golf Championships"],
    ["Willie Anderson", "Bobby Jones", "Ben Hogan", "Jack Nicklaus", "Tiger Woods", "Gary Player", "Arnold Palmer", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth"],
    ["Mike Austin", "Carl Cooper", "Shaun Micheel", "Dustin Johnson", "Bubba Watson", "Rory McIlroy", "Bryson DeChambeau", "Jon Rahm", "Cameron Champ", "Kyle Berkshire"],
    ["Brian Harman", "Cameron Young", "Tommy Fleetwood", "Rory McIlroy", "Scottie Scheffler", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa"],
    ["1.68 inches", "1.70 inches", "1.66 inches", "1.72 inches", "1.74 inches", "1.76 inches", "1.78 inches", "1.80 inches", "1.82 inches", "1.84 inches"],
    ["Tiger Woods", "Jack Nicklaus", "Gary Player", "Arnold Palmer", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa"],
    ["Bobby Jones", "Alister MacKenzie", "Perry Maxwell", "Tom Fazio", "Jack Nicklaus", "Arnold Palmer", "Gary Player", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth"],
    ["20", "18", "15", "12", "10", "8", "6", "4", "2", "1"],
    ["Tiger Woods", "Phil Mickelson", "Steve Stricker", "Jim Furyk", "Dustin Johnson", "Justin Thomas", "Jordan Spieth", "Rory McIlroy", "Brooks Koepka", "Xander Schauffele"],
    ["Matt Fitzpatrick", "Scottie Scheffler", "Will Zalatoris", "Rory McIlroy", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa", "Justin Thomas"],
    ["Golden Bell", "Amen Corner", "Raes Creek", "Magnolia Lane", "Eisenhower Tree", "Hogan Bridge", "Sarazen Bridge", "Nelson Bridge", "Butler Cabin", "Crow's Nest"],
    ["Jack Nicklaus", "Tiger Woods", "Phil Mickelson", "Arnold Palmer", "Gary Player", "Tom Watson", "Ben Hogan", "Rory McIlroy", "Jordan Spieth", "Dustin Johnson"],
    ["No limit", "10", "8", "6", "4", "2", "1", "12", "14", "16"],
    ["Tiger Woods", "Jack Nicklaus", "Tom Watson", "Arnold Palmer", "Gary Player", "Ben Hogan", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth", "Dustin Johnson"],
    ["Oak Hill", "Valhalla", "Pebble Beach", "Augusta National", "St. Andrews", "Pinehurst", "Bethpage Black", "Shinnecock Hills", "Winged Foot", "Hazeltine National"],
    ["Hideki Matsuyama", "Dustin Johnson", "Jon Rahm", "Scottie Scheffler", "Xander Schauffele", "Patrick Reed", "Bryson DeChambeau", "Collin Morikawa", "Justin Thomas", "Rory McIlroy"],
    ["2.75 inches", "2.5 inches", "3 inches", "3.25 inches", "3.5 inches", "4 inches", "4.5 inches", "5 inches", "5.5 inches", "6 inches"],
    ["Robert Allenby", "Hal Sutton", "Gary Player", "Tiger Woods", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa"],
    ["Jack Neville", "Douglas Grant", "Alister MacKenzie", "Bobby Jones", "Tom Fazio", "Jack Nicklaus", "Arnold Palmer", "Gary Player", "Phil Mickelson", "Rory McIlroy"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    ["Seve Ballesteros", "Bernhard Langer", "Colin Montgomerie", "Nick Faldo", "Sergio Garcia", "Lee Westwood", "Ian Woosnam", "José María Olazábal", "Luke Donald", "Justin Rose"],
    ["Collin Morikawa", "Brooks Koepka", "Justin Thomas", "Rory McIlroy", "Scottie Scheffler", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau", "Jon Rahm"],
    ["Tom Morris", "Old Tom", "Valley of Sin", "Road Hole", "Swilcan Bridge", "Hell Bunker", "Eden", "Cardinal", "Strath", "Granny Clark"],
    ["Gary Player", "Bernhard Langer", "Hale Irwin", "Jack Nicklaus", "Tiger Woods", "Phil Mickelson", "Arnold Palmer", "Tom Watson", "Rory McIlroy", "Jordan Spieth"],
    ["1.62 ounces", "1.60 ounces", "1.64 ounces", "1.66 ounces", "1.68 ounces", "1.70 ounces", "1.72 ounces", "1.74 ounces", "1.76 ounces", "1.78 ounces"],
    ["Jack Nicklaus", "Tiger Woods", "Arnold Palmer", "Gary Player", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa"],
    ["Pebble Beach", "Augusta National", "St. Andrews", "Pinehurst", "Bethpage Black", "Shinnecock Hills", "Winged Foot", "Hazeltine National", "Oak Hill", "Valhalla"],
    ["Shane Lowry", "Tommy Fleetwood", "Tony Finau", "Rory McIlroy", "Scottie Scheffler", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa"],
    ["4.25 inches", "4.20 inches", "4.30 inches", "4.35 inches", "4.40 inches", "4.45 inches", "4.50 inches", "4.55 inches", "4.60 inches", "4.65 inches"],
    ["Gary Player", "Seve Ballesteros", "Greg Norman", "Nick Faldo", "Bernhard Langer", "Colin Montgomerie", "Sergio Garcia", "Lee Westwood", "Ian Woosnam", "José María Olazábal"],
    ["Donald Ross", "Alister MacKenzie", "Bobby Jones", "Tom Fazio", "Jack Nicklaus", "Arnold Palmer", "Gary Player", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth"],
    ["-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6"],
    ["Tiger Woods", "Jordan Spieth", "Collin Morikawa", "Justin Thomas", "Rory McIlroy", "Scottie Scheffler", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau"],
    ["Scottie Scheffler", "Jon Rahm", "Rory McIlroy", "Xander Schauffele", "Patrick Reed", "Dustin Johnson", "Bryson DeChambeau", "Collin Morikawa", "Justin Thomas", "Brooks Koepka"],
    ["34-35 inches", "32-33 inches", "36-37 inches", "38-39 inches", "40-41 inches", "42-43 inches", "44-45 inches", "46-47 inches", "48-49 inches", "50-51 inches"],
    ["Tiger Woods", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth", "Dustin Johnson", "Justin Thomas", "Brooks Koepka", "Xander Schauffele", "Jon Rahm", "Scottie Scheffler"],
    ["Pete Dye", "Alister MacKenzie", "Bobby Jones", "Tom Fazio", "Jack Nicklaus", "Arnold Palmer", "Gary Player", "Phil Mickelson", "Rory McIlroy", "Jordan Spieth"],
    ["-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5"],
    ["Bobby Jones", "Tiger Woods", "Phil Mickelson", "Jack Nicklaus", "Arnold Palmer", "Gary Player", "Tom Watson", "Rory McIlroy", "Jordan Spieth", "Dustin Johnson"]
  ],
  "Soccer": [
    ["Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Michel Platini", "Marco van Basten", "Zinedine Zidane", "Ronaldo", "Franz Beckenbauer", "Alfredo Di Stéfano", "Luka Modrić"],
    ["Brazil", "Germany", "Italy", "Argentina", "France", "Uruguay", "England", "Spain", "Netherlands", "Portugal"],
    ["Alan Shearer", "Harry Kane", "Wayne Rooney", "Andy Cole", "Sergio Agüero", "Frank Lampard", "Thierry Henry", "Robbie Fowler", "Jermain Defoe", "Michael Owen"],
    ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich", "Barcelona", "Ajax", "Manchester United", "Juventus", "Inter Milan", "Chelsea"],
    ["Kylian Mbappé", "Lionel Messi", "Harry Kane", "Olivier Giroud", "Julián Álvarez", "Richarlison", "Cody Gakpo", "Álvaro Morata", "Marcus Rashford", "Bukayo Saka"],
    ["Cristiano Ronaldo", "Lionel Messi", "Ali Daei", "Pelé", "Ferenc Puskás", "Romário", "Neymar", "Sunil Chhetri", "Mokhtar Dahari", "Robert Lewandowski"],
    ["90 minutes", "80 minutes", "100 minutes", "120 minutes", "60 minutes", "70 minutes", "110 minutes", "130 minutes", "45 minutes", "30 minutes"],
    ["Qatar", "Russia", "Brazil", "South Africa", "Germany", "South Korea/Japan", "France", "USA", "Mexico", "Italy"],
    ["Casemiro", "Neymar", "Thiago Silva", "Marquinhos", "Alisson Becker", "Ederson", "Danilo", "Éder Militão", "Fred", "Lucas Paquetá"],
    ["Manchester United", "Liverpool", "Arsenal", "Chelsea", "Manchester City", "Tottenham Hotspur", "Everton", "Newcastle United", "Aston Villa", "West Ham United"],
    ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Kevin De Bruyne", "Robert Lewandowski", "Karim Benzema", "Neymar", "Harry Kane", "Mohamed Salah", "Luka Modrić"],
    ["Lionel Messi", "Xavi Hernández", "Ángel Di María", "Andrés Iniesta", "Toni Kroos", "Jordi Alba", "Karim Benzema", "Dani Alves", "Luis Suárez", "Gerard Piqué"],
    ["Unfair advantage", "Goal scoring", "Foul play", "Offensive strategy", "Defensive strategy", "Player substitution", "Time wasting", "Ball possession", "Free kicks", "Corner kicks"],
    ["Italy", "England", "France", "Spain", "Germany", "Portugal", "Netherlands", "Belgium", "Croatia", "Denmark"],
    ["Cristiano Ronaldo", "Karim Benzema", "Raúl", "Alfredo Di Stéfano", "Santillana", "Hugo Sánchez", "Ferenc Puskás", "Emilio Butragueño", "Gareth Bale", "Zinedine Zidane"],
    ["Independiente", "Boca Juniors", "Peñarol", "River Plate", "Nacional", "São Paulo", "Palmeiras", "Flamengo", "Grêmio", "Santos"],
    ["Emiliano Martínez", "Dominik Livaković", "Yassine Bounou", "Hugo Lloris", "Thibaut Courtois", "Manuel Neuer", "Alisson Becker", "Ederson", "Marc-André ter Stegen", "David de Gea"],
    ["Gerardo Bedoya", "Sergio Ramos", "Pepe", "Felipe Melo", "Luis Suárez", "Marco Materazzi", "John Terry", "Zlatan Ibrahimović", "Mario Balotelli", "Diego Costa"],
    ["8x24 feet", "7x21 feet", "6x18 feet", "9x27 feet", "5x15 feet", "10x30 feet", "4x12 feet", "3x9 feet", "2x6 feet", "1x3 feet"],
    ["Russia", "Qatar", "Brazil", "South Africa", "Germany", "South Korea/Japan", "France", "USA", "Mexico", "Italy"],
    ["Pep Guardiola", "Jürgen Klopp", "Erik ten Hag", "Mikel Arteta", "Thomas Tuchel", "José Mourinho", "Mauricio Pochettino", "Unai Emery", "Eddie Howe", "Graham Potter"],
    ["Arsenal", "Manchester United", "Chelsea", "Liverpool", "Tottenham Hotspur", "Everton", "Newcastle United", "Aston Villa", "West Ham United", "Leicester City"],
    ["Lionel Messi", "Robert Lewandowski", "Jorginho", "Karim Benzema", "N’Golo Kanté", "Kevin De Bruyne", "Kylian Mbappé", "Cristiano Ronaldo", "Neymar", "Mohamed Salah"],
    ["Alan Shearer", "Harry Kane", "Sergio Agüero", "Wayne Rooney", "Andy Cole", "Frank Lampard", "Thierry Henry", "Robbie Fowler", "Jermain Defoe", "Michael Owen"],
    ["5", "3", "4", "6", "7", "8", "9", "10", "11", "12"],
    ["Germany", "Brazil", "Argentina", "Spain", "Italy", "France", "Uruguay", "England", "Netherlands", "Portugal"],
    ["Lionel Messi", "Luis Suárez", "Johan Cruyff", "Ronaldo", "Ronaldinho", "Rivaldo", "Neymar", "Samuel Eto’o", "Andrés Iniesta", "Xavi Hernández"],
    ["Real Madrid", "Barcelona", "Atlético Madrid", "Valencia", "Sevilla", "Athletic Bilbao", "Deportivo La Coruña", "Real Sociedad", "Espanyol", "Real Betis"],
    ["Real Madrid", "Manchester City", "Chelsea", "Liverpool", "Bayern Munich", "Paris Saint-Germain", "Juventus", "Inter Milan", "Borussia Dortmund", "Manchester United"],
    ["Lionel Messi", "Kevin De Bruyne", "Neymar", "Ángel Di María", "Xavi Hernández", "Andrés Iniesta", "Toni Kroos", "Jordi Alba", "Karim Benzema", "Dani Alves"],
    ["8.6-9 inches", "8-8.5 inches", "9-9.5 inches", "7.5-8 inches", "9.5-10 inches", "10-10.5 inches", "7-7.5 inches", "6.5-7 inches", "10.5-11 inches", "11-11.5 inches"],
    ["South Africa", "Qatar", "Russia", "Brazil", "Germany", "South Korea/Japan", "France", "USA", "Mexico", "Italy"],
    ["Lionel Messi", "Ángel Di María", "Juan Román Riquelme", "Emiliano Martínez", "Lautaro Martínez", "Rodrigo De Paul", "Leandro Paredes", "Gonzalo Montiel", "Nicolás Otamendi", "Julián Álvarez"],
    ["Juventus", "AS Roma", "Inter Milan", "AC Milan", "Napoli", "Lazio", "Fiorentina", "Torino", "Sampdoria", "Bologna"],
    ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Kevin De Bruyne", "Robert Lewandowski", "Karim Benzema", "Neymar", "Harry Kane", "Mohamed Salah", "Luka Modrić"],
    ["Erling Haaland", "Mohamed Salah", "Harry Kane", "Alan Shearer", "Wayne Rooney", "Andy Cole", "Frank Lampard", "Thierry Henry", "Robbie Fowler", "Jermain Defoe"],
    ["100-110 meters", "90-100 meters", "110-120 meters", "80-90 meters", "120-130 meters", "70-80 meters", "60-70 meters", "50-60 meters", "40-50 meters", "30-40 meters"],
    ["Italy", "Brazil", "Germany", "Argentina", "France", "Uruguay", "England", "Spain", "Netherlands", "Portugal"],
    ["Wayne Rooney", "Bobby Charlton", "Denis Law", "Cristiano Ronaldo", "George Best", "Eric Cantona", "Ryan Giggs", "Paul Scholes", "David Beckham", "Ruud van Nistelrooy"],
    ["Bayern Munich", "Borussia Dortmund", "Hamburger SV", "Werder Bremen", "VfB Stuttgart", "Borussia Mönchengladbach", "Eintracht Frankfurt", "Schalke 04", "Bayer Leverkusen", "RB Leipzig"],
    ["Karim Benzema", "Lionel Messi", "Robert Lewandowski", "Kylian Mbappé", "Kevin De Bruyne", "Neymar", "Harry Kane", "Mohamed Salah", "Luka Modrić", "Erling Haaland"],
    ["Petr Čech", "David James", "Mark Schwarzer", "David Seaman", "Pepe Reina", "Edwin van der Sar", "Tim Howard", "Brad"]
    ],
  // Add this inside the potentialAnswers object in potentialAnswers.js
"NHL": [
    ["Wayne Gretzky", "Jaromir Jagr", "Mark Messier", "Sidney Crosby", "Mario Lemieux"],
    ["Montreal Canadiens", "Toronto Maple Leafs", "Boston Bruins", "Detroit Red Wings", "Chicago Blackhawks"],
    ["Alex Ovechkin", "Gordie Howe", "Brett Hull", "Mario Lemieux", "Jaromir Jagr"],
    ["Eddie Shore", "Bobby Orr", "Connor McDavid", "Sidney Crosby", "Mario Lemieux"],
    ["Jonathan Marchessault", "Nathan MacKinnon", "Cale Makar", "Leon Draisaitl", "Jack Eichel"],
    ["20 minutes", "15 minutes", "30 minutes", "10 minutes", "25 minutes"],
    ["Wayne Gretzky", "Ron Francis", "Mark Messier", "Ray Bourque", "Joe Thornton"],
    ["Montreal Canadiens", "New York Islanders", "Edmonton Oilers", "Pittsburgh Penguins", "Detroit Red Wings"],
    ["Wayne Gretzky", "Alex Ovechkin", "Brett Hull", "Mike Bossy", "Mario Lemieux"],
    ["Moritz Seider", "Cale Makar", "Matty Beniers", "Trevor Zegras", "Cole Caufield"],
    ["200x85 feet", "180x80 feet", "220x90 feet", "190x75 feet", "210x100 feet"],
    ["Colorado Avalanche", "Tampa Bay Lightning", "Vegas Golden Knights", "Florida Panthers", "St. Louis Blues"],
    ["Alex Ovechkin", "Dave Andreychuk", "Brett Hull", "Phil Esposito", "Mario Lemieux"],
    ["Gordie Howe", "Ray Bourque", "Wayne Gretzky", "Mark Messier", "Steve Yzerman"],
    ["5.5-6 ounces", "4-5 ounces", "6-7 ounces", "3-4 ounces", "7-8 ounces"],
    ["Tampa Bay Lightning", "Pittsburgh Penguins", "Boston Bruins", "Washington Capitals", "New Jersey Devils"],
    ["Linus Ullmark", "Igor Shesterkin", "Connor Hellebuyck", "Andrei Vasilevskiy", "Juuse Saros"],
    ["Martin Brodeur", "Terry Sawchuk", "George Hainsworth", "Patrick Roy", "Dominik Hasek"],
    ["6", "5", "7", "4", "8"],
    ["Tampa Bay Lightning", "St. Louis Blues", "Dallas Stars", "Colorado Avalanche", "Boston Bruins"],
    ["Tiger Williams", "Dave Schultz", "Bob Probert", "Marty McSorley", "Tie Domi"],
    ["Cale Makar", "Roman Josi", "Victor Hedman", "Adam Fox", "Charlie McAvoy"],
    ["3 inches", "2 inches", "4 inches", "2.5 inches", "3.5 inches"],
    ["Montreal Canadiens", "Boston Bruins", "Toronto Maple Leafs", "Chicago Blackhawks", "Detroit Red Wings"],
    ["Andrei Vasilevskiy", "Victor Hedman", "Nikita Kucherov", "Ryan O'Reilly", "Steven Stamkos"],
    ["Wayne Gretzky", "Mario Lemieux", "Mike Bossy", "Brett Hull", "Alex Ovechkin"],
    ["4x6 feet", "3x5 feet", "5x7 feet", "4x8 feet", "3x6 feet"],
    ["St. Louis Blues", "Boston Bruins", "Washington Capitals", "Tampa Bay Lightning", "Pittsburgh Penguins"],
    ["Jaromir Jagr", "Alex Ovechkin", "Brett Hull", "Phil Esposito", "Patrick Marleau"],
    ["Patrice Bergeron", "Anze Kopitar", "Ryan O'Reilly", "Aleksander Barkov", "Jordan Staal"],
    ["64 feet", "60 feet", "70 feet", "50 feet", "75 feet"],
    ["Chicago Blackhawks", "Detroit Red Wings", "Colorado Avalanche", "Edmonton Oilers", "Dallas Stars"],
    ["Jaccob Slavin", "Anze Kopitar", "Patrice Bergeron", "Auston Matthews", "Mark Stone"],
    ["Alex Ovechkin", "Ray Bourque", "Jaromir Jagr", "Brett Hull", "Phil Esposito"],
    ["20", "18", "22", "15", "25"],
    ["Washington Capitals", "Pittsburgh Penguins", "Tampa Bay Lightning", "Colorado Avalanche", "St. Louis Blues"],
    ["Gordie Howe", "Patrick Marleau", "Jaromir Jagr", "Mark Messier", "Ron Francis"],
    ["Kirill Kaprizov", "Alex DeBrincat", "Charlie McAvoy", "Jason Robertson", "Tim Stutzle"],
    ["5 minutes", "10 minutes", "3 minutes", "7 minutes", "15 minutes"],
    ["Detroit Red Wings", "Boston Bruins", "Washington Capitals", "Tampa Bay Lightning", "New York Rangers"],
    ["Erik Karlsson", "Cale Makar", "Adam Fox", "Victor Hedman", "Roman Josi"],
    ["Bobby Orr", "Larry Robinson", "Ray Bourque", "Denis Potvin", "Chris Chelios"],
    ["30 feet", "20 feet", "40 feet", "25 feet", "35 feet"],
    ["Pittsburgh Penguins", "Washington Capitals", "Chicago Blackhawks", "Tampa Bay Lightning", "Nashville Predators"],
    ["Tie Domi", "Bob Probert", "Marty McSorley", "Dave Schultz", "Chris Neil"],
    ["Patrice Bergeron", "Anze Kopitar", "Jonathan Toews", "Sidney Crosby", "Aleksander Barkov"],
    ["No time limit", "10 seconds", "5 seconds", "15 seconds", "20 seconds"],
    ["Montreal Canadiens", "Detroit Red Wings", "Edmonton Oilers", "Boston Bruins", "Chicago Blackhawks"],
    ["Marc-André Fleury", "Andrei Vasilevskiy", "Carey Price", "Igor Shesterkin", "Jacob Markstrom"],
    ["Alex Ovechkin", "Sidney Crosby", "Jaromir Jagr", "Brad Marchand", "Patrick Kane"]
],
"Random": [
    ["Emmitt Smith", "Walter Payton", "Barry Sanders", "Adrian Peterson", "Frank Gore"],
    ["Brazil", "Germany", "Italy", "Argentina", "France"],
    ["LeBron James", "Kareem Abdul-Jabbar", "Karl Malone", "Kobe Bryant", "Michael Jordan"],
    ["Georgia", "Alabama", "Clemson", "LSU", "Ohio State"],
    ["UCLA", "Kentucky", "North Carolina", "Duke", "Kansas"],
    ["Wayne Gretzky", "Jaromir Jagr", "Mark Messier", "Sidney Crosby", "Mario Lemieux"],
    ["Alan Shearer", "Harry Kane", "Wayne Rooney", "Thierry Henry", "Frank Lampard"],
    ["Boston Celtics", "Los Angeles Lakers", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs"],
    ["Ron Dayne", "Ricky Williams", "Tony Dorsett", "Herschel Walker", "Archie Griffin"],
    ["Pete Maravich", "Freeman Williams", "Lionel Simmons", "Chris Clemons", "Kelsey Barlow"],
    ["Montreal Canadiens", "Toronto Maple Leafs", "Boston Bruins", "Detroit Red Wings", "Chicago Blackhawks"],
    ["John Ross", "Chris Johnson", "Tyreek Hill", "Darrell Green", "Deion Sanders"],
    ["Cristiano Ronaldo", "Lionel Messi", "Ali Daei", "Pelé", "Ferenc Puskás"],
    ["Wilt Chamberlain", "Kobe Bryant", "Michael Jordan", "Damian Lillard", "David Thompson"],
    ["Caleb Williams", "Bryce Young", "CJ Stroud", "Trevor Lawrence", "Joe Burrow"],
    ["UConn", "San Diego State", "Miami", "Florida Atlantic", "Baylor"],
    ["Jonathan Marchessault", "Nathan MacKinnon", "Cale Makar", "Leon Draisaitl", "Jack Eichel"],
    ["New England Patriots", "Dallas Cowboys", "Pittsburgh Steelers", "San Francisco 49ers", "Philadelphia Eagles"],
    ["Italy", "England", "Spain", "France", "Germany"],
    ["John Stockton", "Chris Paul", "LeBron James", "Jason Kidd", "Steve Nash"],
    ["Alabama", "Georgia", "Tennessee", "LSU", "Florida"],
    ["Duke", "North Carolina", "Virginia", "Syracuse", "Louisville"],
    ["Wayne Gretzky", "Ron Francis", "Mark Messier", "Ray Bourque", "Joe Thornton"],
    ["Tom Brady", "Peyton Manning", "Drew Brees", "Brett Favre", "Dan Marino"],
    ["Cristiano Ronaldo", "Lionel Messi", "Karim Benzema", "Raúl", "Ángel Di María"],
    ["Golden State Warriors", "Boston Celtics", "Milwaukee Bucks", "Denver Nuggets", "Toronto Raptors"],
    ["Case Keenum", "Timmy Chang", "Colt Brennan", "Graham Harrell", "Landry Jones"],
    ["Oscar Tshiebwe", "Keegan Murray", "Johnny Davis", "Kofi Cockburn", "Drew Timme"],
    ["Colorado Avalanche", "Tampa Bay Lightning", "Vegas Golden Knights", "Florida Panthers", "St. Louis Blues"],
    ["Bruce Smith", "Reggie White", "DeMarcus Ware", "Aaron Donald", "Von Miller"],
    ["Lionel Messi", "Erling Haaland", "Kevin De Bruyne", "Kylian Mbappé", "Karim Benzema"],
    ["Wilt Chamberlain", "Bill Russell", "Kareem Abdul-Jabbar", "Tim Duncan", "Moses Malone"],
    ["Alabama", "Georgia", "Clemson", "LSU", "Ohio State"],
    ["Bobby Hurley", "Chris Paul", "Jason Kidd", "Sherman Douglas", "Gary Payton"],
    ["Alex Ovechkin", "Dave Andreychuk", "Brett Hull", "Phil Esposito", "Mario Lemieux"],
    ["Tom Brady", "Joe Montana", "Peyton Manning", "Terry Bradshaw", "Patrick Mahomes"],
    ["Qatar", "Russia", "Brazil", "Germany", "South Africa"],
    ["Nikola Jokić", "Jamal Murray", "Jimmy Butler", "Bam Adebayo", "Aaron Jones"],
    ["Archie Griffin", "Caleb Williams", "Bryce Young", "Tim Tebow", "Johnny Manziel"],
    ["Baylor", "Gonzaga", "Houston", "UCLA", "Virginia"],
    ["Tiger Williams", "Dave Schultz", "Bob Probert", "Marty McSorley", "Tie Domi"],
    ["Rod Woodson", "Deion Sanders", "Aqib Talib", "Charles Woodson", "Ed Reed"],
    ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich", "Barcelona"],
    ["John Stockton", "Jason Kidd", "Chris Paul", "Michael Jordan", "LeBron James"],
    ["Joe Paterno", "Bobby Bowden", "Nick Saban", "Bear Bryant", "Pop Warner"],
    ["John Linehan", "Eric Murdock", "Mookie Blaylock", "Jason Kidd", "Chris Paul"],
    ["Montreal Canadiens", "Boston Bruins", "Toronto Maple Leafs", "Chicago Blackhawks", "Detroit Red Wings"],
    ["Calvin Johnson", "Jerry Rice", "Cooper Kupp", "Michael Thomas", "Randy Moss"],
    ["Kylian Mbappé", "Lionel Messi", "Olivier Giroud", "Julián Álvarez", "Ángel Di María"],
    ["Hakeem Olajuwon", "Dikembe Mutombo", "Tim Duncan", "David Robinson", "Ben Wallace"]
],
  "CollegeFootball": [
    ["Ron Dayne", "Ricky Williams", "Tony Dorsett", "Herschel Walker", "Archie Griffin"], // Q1: Top 3 rushing yards
    ["Georgia", "Alabama", "Clemson", "LSU", "Ohio State"], // Q2: 2022 National Championship
    ["Alabama", "Georgia", "Tennessee", "LSU", "Florida"], // Q3: Top 3 SEC titles
    ["Caleb Williams", "Bryce Young", "CJ Stroud", "Trevor Lawrence", "Joe Burrow"], // Q4: 2022 Heisman Trophy
    ["Case Keenum", "Timmy Chang", "Colt Brennan", "Graham Harrell", "Landry Jones"], // Q5: Top 3 passing yards
    ["Alabama", "Georgia", "Clemson", "LSU", "Ohio State"], // Q6: 2021 CFP National Championship
    ["Case Keenum", "Sam Ehlinger", "Colt McCoy", "Tim Tebow", "Johnny Manziel"], // Q7: Top 3 passing TDs
    ["Archie Griffin", "Caleb Williams", "Bryce Young", "Tim Tebow", "Johnny Manziel"], // Q8: Top 3 Heisman wins
    ["Joe Paterno", "Bobby Bowden", "Nick Saban", "Bear Bryant", "Pop Warner"], // Q9: Top 3 coaches by wins
    ["Herschel Walker", "Barry Sanders", "Bo Jackson", "Adrian Peterson", "Ezekiel Elliott"], // Q10: Top 3 single-season rushing
    ["Alabama", "USC", "Notre Dame", "Ohio State", "Oklahoma"], // Q11: Top 3 national titles
    ["Tim Tebow", "Johnny Manziel", "Vince Young", "Matt Leinart", "Cam Newton"], // Q12: Top 3 total offense
    ["Florida State", "Miami", "Clemson", "Georgia Tech", "Virginia Tech"], // Q13: Top 3 ACC titles
    ["Bryce Young", "Trevor Lawrence", "Joe Burrow", "Tua Tagovailoa", "Kyler Murray"], // Q14: 2021 Heisman
    ["Kellen Moore", "Colt Brennan", "Ty Detmer", "Case Keenum", "Timmy Chang"], // Q15: Top 3 completion percentage
    ["Clemson", "Alabama", "Ohio State", "Notre Dame", "LSU"], // Q16: 2020 National Championship
    ["Herschel Walker", "Bo Jackson", "Barry Sanders", "Adrian Peterson", "LaDainian Tomlinson"], // Q17: Top 3 yards per carry
    ["Eddie George", "Ricky Williams", "Reggie Bush", "Herschel Walker", "Bo Jackson"], // Q18: Top 3 Heisman RBs
    ["Florida", "LSU", "Georgia", "Auburn", "Tennessee"], // Q19: Top 3 SEC East titles
    ["Trevor Lawrence", "Joe Burrow", "Kyler Murray", "Baker Mayfield", "Lamar Jackson"], // Q20: 2020 Heisman
    ["Colt Brennan", "Kellen Moore", "Case Keenum", "Graham Harrell", "Ty Detmer"], // Q21: Top 3 QB rushing TDs
    ["Ohio State", "Michigan", "Penn State", "Wisconsin", "Nebraska"], // Q22: Top 3 Big Ten titles
    ["Barry Sanders", "Herschel Walker", "Bo Jackson", "Adrian Peterson", "Ezekiel Elliott"], // Q23: Top 3 single-game rushing
    ["Vince Young", "Cam Newton", "Johnny Manziel", "Tim Tebow", "Matt Leinart"], // Q24: Top 3 championship game MVPs
    ["USC", "Oklahoma", "Notre Dame", "Alabama", "Texas"], // Q25: Top 3 Heisman winners
    ["LSU", "Clemson", "Alabama", "Ohio State", "Georgia"], // Q26: 2019 National Championship
    ["Keenan Reynolds", "Collin Klein", "Denard Robinson", "Jordan Lynch", "Johnny Manziel"], // Q27: Top 3 dual-threat QBs
    ["Texas", "Oklahoma", "Texas A&M", "Baylor", "TCU"], // Q28: Top 3 Big 12 titles
    ["Joe Burrow", "Kyler Murray", "Baker Mayfield", "Lamar Jackson", "Jameis Winston"], // Q29: 2019 Heisman
    ["Graham Harrell", "Colt Brennan", "Case Keenum", "Kellen Moore", "Ty Detmer"], // Q30: Top 3 passing yards per game
    ["Georgia", "Clemson", "LSU", "Ohio State", "Alabama"], // Q31: 2018 National Championship
    ["Bo Jackson", "Herschel Walker", "Barry Sanders", "Reggie Bush", "Eddie George"], // Q32: Top 3 career TDs
    ["Florida State", "Clemson", "Miami", "Georgia Tech", "Virginia Tech"], // Q33: Top 3 longest win streaks
    ["Baker Mayfield", "Lamar Jackson", "Jameis Winston", "Cam Newton", "Tim Tebow"], // Q34: 2018 Heisman
    ["Ty Detmer", "Kellen Moore", "Colt Brennan", "Case Keenum", "Graham Harrell"], // Q35: Top 3 career passer rating
    ["Alabama", "Clemson", "Georgia", "LSU", "Ohio State"], // Q36: 2017 National Championship
    ["Reggie Bush", "Eddie George", "Ricky Williams", "Herschel Walker", "Bo Jackson"], // Q37: Top 3 career all-purpose yards
    ["Oklahoma", "USC", "Texas", "Notre Dame", "Alabama"], // Q38: Top 3 Rose Bowl wins
    ["Jameis Winston", "Cam Newton", "Tim Tebow", "Vince Young", "Matt Leinart"], // Q39: Top 3 career wins as QB
    ["Clemson", "Alabama", "Ohio State", "Georgia", "LSU"], // Q40: 2016 National Championship
    ["Denard Robinson", "Jordan Lynch", "Collin Klein", "Johnny Manziel", "Keenan Reynolds"], // Q41: Top 3 career rushing yards by QB
    ["Notre Dame", "USC", "Michigan", "Ohio State", "Texas"], // Q42: Top 3 Sugar Bowl wins
    ["Lamar Jackson", "Jameis Winston", "Cam Newton", "Tim Tebow", "Vince Young"], // Q43: 2017 Heisman
    ["Kellen Moore", "Ty Detmer", "Colt Brennan", "Case Keenum", "Graham Harrell"], // Q44: Top 3 career completions
    ["Alabama", "Clemson", "Ohio State", "Georgia", "LSU"], // Q45: 2015 National Championship
    ["Herschel Walker", "Reggie Bush", "Eddie George", "Barry Sanders", "Bo Jackson"], // Q46: Top 3 career kick return yards
    ["Stanford", "USC", "UCLA", "California", "Oregon"], // Q47: Top 3 Pac-12 titles
    ["Cam Newton", "Tim Tebow", "Vince Young", "Matt Leinart", "Jameis Winston"], // Q48: Top 3 career passing TDs in championship games
    ["Georgia", "Alabama", "Clemson", "LSU", "Ohio State"], // Q49: 2014 National Championship
    ["Johnny Manziel", "Collin Klein", "Denard Robinson", "Jordan Lynch", "Keenan Reynolds"] // Q50: Top 3 career total offense by QB
],
  "CollegeBasketball": [
    ["UCLA", "Kentucky", "North Carolina", "Duke", "Kansas"], // Q1: Top 3 NCAA championships
    ["Pete Maravich", "Freeman Williams", "Lionel Simmons", "Chris Clemons", "Kelsey Barlow"], // Q2: Most career points
    ["Duke", "North Carolina", "Virginia", "Syracuse", "Louisville"], // Q3: Top 3 ACC titles
    ["UConn", "San Diego State", "Miami", "Florida Atlantic", "Baylor"], // Q4: 2023 NCAA Championship
    ["Oscar Tshiebwe", "Keegan Murray", "Johnny Davis", "Kofi Cockburn", "Drew Timme"], // Q5: 2022 Naismith Player of the Year
    ["Baylor", "Gonzaga", "Houston", "UCLA", "Virginia"], // Q6: 2021 NCAA Championship
    ["Bobby Hurley", "Chris Paul", "Jason Kidd", "Sherman Douglas", "Gary Payton"], // Q7: Top 3 assists
    ["John Linehan", "Eric Murdock", "Mookie Blaylock", "Jason Kidd", "Chris Paul"], // Q8: Top 3 steals
    ["John Wooden", "Mike Krzyzewski", "Dean Smith", "Roy Williams", "Jim Calhoun"], // Q9: Top 3 coaches by wins
    ["Christian Laettner", "Tyler Hansbrough", "JJ Redick", "Shane Battier", "Grant Hill"], // Q10: Top 3 points in a season
    ["Kentucky", "UCLA", "North Carolina", "Duke", "Kansas"], // Q11: Top 3 Final Four appearances
    ["Bill Walton", "Lew Alcindor", "Ralph Sampson", "David Thompson", "Elvin Hayes"], // Q12: Top 3 rebounds
    ["Villanova", "Baylor", "Gonzaga", "UCLA", "Houston"], // Q13: 2020 NCAA Championship (canceled, so hypothetical)
    ["Tim Duncan", "David Robinson", "Hakeem Olajuwon", "Patrick Ewing", "Shaquille O'Neal"], // Q14: Top 3 blocks
    ["Kentucky", "Kansas", "UCLA", "North Carolina", "Duke"], // Q15: Top 3 tournament wins
    ["Zion Williamson", "Anthony Davis", "Kemba Walker", "Carmelo Anthony", "Kevin Durant"], // Q16: Top 3 tournament points
    ["Virginia", "Villanova", "Baylor", "Gonzaga", "UCLA"], // Q17: 2019 NCAA Championship
    ["Tyler Hansbrough", "Christian Laettner", "JJ Redick", "Shane Battier", "Grant Hill"], // Q18: Top 3 career points per game
    ["Kansas", "Kentucky", "North Carolina", "UCLA", "Duke"], // Q19: Top 3 Big 12 titles
    ["Buddy Hield", "Trae Young", "Frank Mason III", "Michael Beasley", "Kevin Durant"], // Q20: Top 3 career three-pointers
    ["Duke", "Kentucky", "Kansas", "North Carolina", "UCLA"], // Q21: 2018 NCAA Championship
    ["Ralph Sampson", "Bill Walton", "Lew Alcindor", "Elvin Hayes", "David Thompson"], // Q22: Top 3 career rebounds per game
    ["UCLA", "Kentucky", "North Carolina", "Duke", "Kansas"], // Q23: Top 3 Sweet 16 appearances
    ["Carmelo Anthony", "Kemba Walker", "Zion Williamson", "Anthony Davis", "Kevin Durant"], // Q24: Top 3 tournament rebounds
    ["Villanova", "Virginia", "Michigan", "Texas Tech", "Gonzaga"], // Q25: 2017 NCAA Championship
    ["Shane Battier", "JJ Redick", "Tyler Hansbrough", "Christian Laettner", "Grant Hill"], // Q26: Top 3 career free throws
    ["North Carolina", "Duke", "Kentucky", "Kansas", "UCLA"], // Q27: Top 3 Elite Eight appearances
    ["Kemba Walker", "Carmelo Anthony", "Zion Williamson", "Anthony Davis", "Kevin Durant"], // Q28: Top 3 tournament assists
    ["North Carolina", "Villanova", "Virginia", "Michigan", "Texas Tech"], // Q29: 2016 NCAA Championship
    ["Lew Alcindor", "Bill Walton", "Ralph Sampson", "Elvin Hayes", "David Thompson"], // Q30: Top 3 career blocks per game
    ["Kentucky", "UCLA", "North Carolina", "Duke", "Kansas"], // Q31: Top 3 No. 1 seeds
    ["Anthony Davis", "Zion Williamson", "Kemba Walker", "Carmelo Anthony", "Kevin Durant"], // Q32: Top 3 tournament blocks
    ["Villanova", "North Carolina", "Duke", "Kentucky", "Kansas"], // Q33: 2015 NCAA Championship
    ["JJ Redick", "Buddy Hield", "Trae Young", "Frank Mason III", "Michael Beasley"], // Q34: Top 3 career three-point percentage
    ["UCLA", "Kentucky", "North Carolina", "Duke", "Kansas"], // Q35: Top 3 national titles
    ["Christian Laettner", "Tyler Hansbrough", "Shane Battier", "JJ Redick", "Grant Hill"], // Q36: Top 3 career field goals
    ["Duke", "North Carolina", "Kentucky", "Kansas", "UCLA"], // Q37: 2014 NCAA Championship
    ["Elvin Hayes", "Ralph Sampson", "Bill Walton", "Lew Alcindor", "David Thompson"], // Q38: Top 3 career double-doubles
    ["Kentucky", "UCLA", "North Carolina", "Duke", "Kansas"], // Q39: Top 3 tournament appearances
    ["Kemba Walker", "Carmelo Anthony", "Zion Williamson", "Anthony Davis", "Kevin Durant"], // Q40: Top 3 tournament steals
    ["Kentucky", "Duke", "UConn", "Florida", "Michigan State"], // Q41: 2013 NCAA Championship
    ["Trae Young", "Buddy Hield", "Frank Mason III", "Michael Beasley", "Kevin Durant"], // Q42: Top 3 career points in a game
    ["UCLA", "Kentucky", "North Carolina", "Duke", "Kansas"], // Q43: Top 3 conference titles
    ["Bill Walton", "Lew Alcindor", "Ralph Sampson", "Elvin Hayes", "David Thompson"], // Q44: Top 3 career points in a season
    ["Louisville", "Kentucky", "Duke", "UConn", "Florida"], // Q45: 2012 NCAA Championship
    ["Shane Battier", "JJ Redick", "Tyler Hansbrough", "Christian Laettner", "Grant Hill"], // Q46: Top 3 career assists per game
    ["North Carolina", "UCLA", "Kentucky", "Duke", "Kansas"], // Q47: Top 3 AP No. 1 rankings
    ["Zion Williamson", "Anthony Davis", "Kemba Walker", "Carmelo Anthony", "Kevin Durant"], // Q48: Top 3 tournament points per game
    ["Kentucky", "North Carolina", "UCLA", "Duke", "Kansas"], // Q49: 2011 NCAA Championship
    ["Chris Paul", "Bobby Hurley", "Jason Kidd", "Sherman Douglas", "Gary Payton"] // Q50: Top 3 career steals per game
],
  "Basketball": [
    ["LeBron James", "Kareem Abdul-Jabbar", "Karl Malone", "Kobe Bryant", "Michael Jordan"], // Q1: Top 3 career points
    ["Boston Celtics", "Los Angeles Lakers", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs"], // Q2: Most NBA Championships
    ["Wilt Chamberlain", "Kobe Bryant", "Michael Jordan", "Damian Lillard", "David Thompson"], // Q3: Highest single-game scoring
    ["John Stockton", "Chris Paul", "LeBron James", "Jason Kidd", "Steve Nash"], // Q4: Top 3 career assists
    ["Golden State Warriors", "Boston Celtics", "Milwaukee Bucks", "Denver Nuggets", "Toronto Raptors"], // Q5: 2022 NBA Championship
    ["Nikola Jokić", "Jamal Murray", "Jimmy Butler", "Bam Adebayo", "Aaron Jones"], // Q6: 2023 NBA Finals MVP
    ["Wilt Chamberlain", "Bill Russell", "Kareem Abdul-Jabbar", "Tim Duncan", "Moses Malone"], // Q7: Top 3 career rebounds
    ["John Stockton", "Jason Kidd", "Chris Paul", "Michael Jordan", "LeBron James"], // Q8: Top 3 career steals
    ["Hakeem Olajuwon", "Dikembe Mutombo", "Tim Duncan", "David Robinson", "Ben Wallace"], // Q9: Most career blocks
    ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Bill Russell", "Magic Johnson"], // Q10: Top 3 MVP awards
    ["Los Angeles Lakers", "Boston Celtics", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs"], // Q11: Top 3 Finals appearances
    ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "Damian Lillard", "Elgin Baylor"], // Q12: Top 3 career points per game
    ["Denver Nuggets", "Milwaukee Bucks", "Boston Celtics", "Miami Heat", "Golden State Warriors"], // Q13: 2023 NBA Championship
    ["Magic Johnson", "John Stockton", "Chris Paul", "LeBron James", "Jason Kidd"], // Q14: Top 3 career assists per game
    ["Toronto Raptors", "Golden State Warriors", "Boston Celtics", "Milwaukee Bucks", "Denver Nuggets"], // Q15: 2021 NBA Championship
    ["Michael Jordan", "John Stockton", "Jason Kidd", "Chris Paul", "LeBron James"], // Q16: Top 3 career steals per game
    ["Bill Russell", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "Tim Duncan", "Hakeem Olajuwon"], // Q17: Top 3 career rebounds per game
    ["Hakeem Olajuwon", "Dikembe Mutombo", "Tim Duncan", "David Robinson", "Ben Wallace"], // Q18: Top 3 career blocks per game
    ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Bill Russell", "Magic Johnson"], // Q19: Top 3 Finals MVPs
    ["Golden State Warriors", "Toronto Raptors", "Los Angeles Lakers", "Boston Celtics", "Milwaukee Bucks"], // Q20: 2020 NBA Championship
    ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "Damian Lillard", "Elgin Baylor"], // Q21: Top 3 single-season points
    ["San Antonio Spurs", "Golden State Warriors", "Toronto Raptors", "Los Angeles Lakers", "Boston Celtics"], // Q22: 2019 NBA Championship
    ["Stephen Curry", "Ray Allen", "James Harden", "Reggie Miller", "Damian Lillard"], // Q23: Top 3 career three-pointers
    ["LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell", "Magic Johnson"], // Q24: Top 3 career playoff points
    ["Golden State Warriors", "San Antonio Spurs", "Toronto Raptors", "Los Angeles Lakers", "Boston Celtics"], // Q25: 2018 NBA Championship
    ["Bill Russell", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "Tim Duncan", "Hakeem Olajuwon"], // Q26: Top 3 career playoff rebounds
    ["Magic Johnson", "John Stockton", "Chris Paul", "LeBron James", "Jason Kidd"], // Q27: Top 3 career playoff assists
    ["Golden State Warriors", "San Antonio Spurs", "Miami Heat", "Cleveland Cavaliers", "Toronto Raptors"], // Q28: 2017 NBA Championship
    ["Michael Jordan", "John Stockton", "Jason Kidd", "Chris Paul", "LeBron James"], // Q29: Top 3 career playoff steals
    ["Hakeem Olajuwon", "Dikembe Mutombo", "Tim Duncan", "David Robinson", "Ben Wallace"], // Q30: Top 3 career playoff blocks
    ["Golden State Warriors", "San Antonio Spurs", "Miami Heat", "Cleveland Cavaliers", "Toronto Raptors"], // Q31: 2016 NBA Championship
    ["Stephen Curry", "Ray Allen", "James Harden", "Reggie Miller", "Damian Lillard"], // Q32: Top 3 career three-point percentage
    ["LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell", "Magic Johnson"], // Q33: Top 3 career playoff points per game
    ["Golden State Warriors", "San Antonio Spurs", "Miami Heat", "Cleveland Cavaliers", "Toronto Raptors"], // Q34: 2015 NBA Championship
    ["Bill Russell", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "Tim Duncan", "Hakeem Olajuwon"], // Q35: Top 3 career playoff rebounds per game
    ["Magic Johnson", "John Stockton", "Chris Paul", "LeBron James", "Jason Kidd"], // Q36: Top 3 career playoff assists per game
    ["San Antonio Spurs", "Miami Heat", "Golden State Warriors", "Cleveland Cavaliers", "Toronto Raptors"], // Q37: 2014 NBA Championship
    ["Michael Jordan", "John Stockton", "Jason Kidd", "Chris Paul", "LeBron James"], // Q38: Top 3 career playoff steals per game
    ["Hakeem Olajuwon", "Dikembe Mutombo", "Tim Duncan", "David Robinson", "Ben Wallace"], // Q39: Top 3 career playoff blocks per game
    ["Miami Heat", "San Antonio Spurs", "Golden State Warriors", "Cleveland Cavaliers", "Toronto Raptors"], // Q40: 2013 NBA Championship
    ["Wilt Chamberlain", "Kobe Bryant", "Michael Jordan", "Damian Lillard", "Elgin Baylor"], // Q41: Top 3 career points in a game
    ["Boston Celtics", "Los Angeles Lakers", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs"], // Q42: Top 3 conference titles
    ["LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell", "Magic Johnson"], // Q43: Top 3 career wins
    ["Miami Heat", "San Antonio Spurs", "Golden State Warriors", "Cleveland Cavaliers", "Toronto Raptors"], // Q44: 2012 NBA Championship
    ["Stephen Curry", "Ray Allen", "James Harden", "Reggie Miller", "Damian Lillard"], // Q45: Top 3 career three-pointers in a game
    ["Bill Russell", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "Tim Duncan", "Hakeem Olajuwon"], // Q46: Top 3 career double-doubles
    ["Los Angeles Lakers", "Boston Celtics", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs"], // Q47: Top 3 playoff appearances
    ["LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell", "Magic Johnson"], // Q48: Top 3 career triple-doubles
    ["Miami Heat", "San Antonio Spurs", "Golden State Warriors", "Cleveland Cavaliers", "Toronto Raptors"], // Q49: 2011 NBA Championship
    ["John Stockton", "Chris Paul", "LeBron James", "Jason Kidd", "Steve Nash"] // Q50: Top 3 career assists in a game
]
    };

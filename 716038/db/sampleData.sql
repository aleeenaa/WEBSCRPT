INSERT INTO `category` (`cat_id`, `cat_name`) VALUES
  (1, 'Electronics & Computers'),
  (2, 'Movies, TV & Music'),
  (3, 'Home, Garden & DIY'),
  (4, 'Toys, Children & Baby'),
  (5, 'Clothes, Shoes & Jewellery'),
  (6, 'Sports & Outdoors'),
  (7, 'Health & Beauty'),
  (8, 'Car & Motorbike'),
  (9, 'Books');

INSERT INTO `product` (`p_id`, `p_name`, `p_desc`, `p_price`, `p_stock_quantity`, `p_img_url`, `cat_id`) VALUES
  (1, 'MacBook Pro 13 inch', 'A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.', 999.00, 100, 'macbookpro13in.jpg', 1),
  (2, 'Sony Radio Alarm Clock (ICFC1TB)', 'Sony Radio Alarm Clock, LED, 10.1 cm, 10.2 cm, 10.1 cm, CR2032, Black,
  Mirror', 25.74, 200, 'sonyalarmclock.jpg', 1),
  (3,'L’Oréal Paris Everpure Volume', 'L’Oréal Paris Everpure Volume. Suitable for: Women, Type: Non-professional, Product type: Shampoo. Package width: 5 cm, Package length: 7.8 cm, Package height: 20.5 cm', 15.88, 15, 'lorealcream.jpg', 7),
  (4, ' Essie 02 Croc n Chic', 'Highly-pigmented, chip resistant formula- Gives a glossy, gel-like finish with a single coat- In a range of colour-pop hues', 3.99, 60, 'nailvarnish.jpg', 7),
  (5, 'McLaren 650s ', 'One of the few things capable of surpassing the experience of driving the McLaren 650S Coupé could be taking the Spider version out for a ride. The prospect of fresh-air driving in one of the most beautiful cars on the market will be an appealing one for any high-performance car enthusiast; the brand-new roadster, moreover, gives up very little to the coupé in terms of speed and driving dynamics.', 111950.00, 3, 'mclaren.jpg', 8),
  (6, 'Rubiks Void', 'he Void Cube is another incredibly addictive, multi-dimensional challenge that will fascinate puzzle fans as much as the Original Rubik’s Cube has done for over three decades. With so many possible color combinations and only one solution, everyone who has ever played with the Rubik’s Cube will want to play with The Void. Twist and turn The Void to return the six colored rings to their complete state and you will find this cube puzzle really is amazing to see, to touch and to play with. Get sucked into the fun and enjoyment of The Rubik’s Void Cube.', 14.99, 14, 'rubiksvoid.jpg', 4),
  (7, 'Blue Jacquard Paisley Print Kimono', 'Wear this paisley print kimono over a vest and skinny jeans combo for an
   instant lift.', 19.99, 120, 'kimono.jpg', 5),
  (8, 'Digimon: The Official Seasons 1-4 Collection', '"Digimon" are "Digital Monsters". According to the stories, they are inhabitants of the "DigiWorld", a manifestation of Earth''s communication network. The stories tell of a group of mostly pre-teens, who accompany special Digimon born to defend their world (and ours) from various evil forces. To help them surmount the most difficult obstacles found within both realms, the Digimon have the ability to evolve (Digivolve). In this process, the Digimon change appearance and become much stronger, often changing in personality as well. The group of children who come in contact with the Digital World changes from series to series.', 203.45, 7, 'digimoncollection.jpg', 2),
  (9, 'Mythical Man Month', 'Few books on software project management have been as influential and timeless asThe Mythical Man-Month. With a blend of software engineering facts and thought-provoking opinions, Fred Brooks offers insight for anyone managing complex projects. These essays draw from his experience as project manager for the IBM System/360 computer family and then for OS/360, its massive software system. Now, 20 years after the initial publication of his book, Brooks has revisited his original ideas and added new thoughts and advice, both for readers already familiar with his work and for readers discovering it for the
  first time.', 17.99, 9, 'MMM.jpg', 9),
  (10, 'Duck Egg Regan Curtain Collection', 'Bring a touch of nature and contemporary style into your home with our modern curtain collection, featuring a green leaf pattern in soft subtle shades of duck egg blue. Our range is the ideal way to breathe life into your decor and update your windows with a refreshing look.', 19.99, 45, 'curtains.jpg', 3),
  (11, 'TIFFANY CT60', 'Watch in stainless steel. Blue soleil dial features gold poudré numerals. 34 mm case. Self-winding mechanical movement. Power reserve 42 hours. Water resistant to 100 meters/330 feet/10 ATM. Swiss-made. ', 3450.00, 6,
  'tiffanyct60.jpg', 5),
  (12, 'Slazenger Elite Cricket Ball', 'Bowl your way to success with a Slazenger cricket ball that is constructed with alum tanned leather in a four piece construction.', 6.75, 78, 'cockball.jpg', 6);
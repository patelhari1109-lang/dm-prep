/* =========================================================================
   DIGITAL MEDIA — Meta campaign objectives (DM08).
   Loads after dm.data.js and adds two sections: Meta buying & the auction,
   and objectives, performance goals & conversion landing pages.
   Case numbers are constructed; Meta's published figures are as given.
   ========================================================================= */

TOPICS.push(
 {id:'auction',    name:'Meta Buying & the Auction',          kick:'auction, reservation, TRP; total value', hot:true},
 {id:'objectives', name:'Objectives, Goals & Landing Pages',  kick:'ODAX, performance goals, Advantage+', hot:true}
);
CONFIG.quizIntro=CONFIG.quizIntro.replace('Nine sections','Eleven sections');

const S_AUCT={cl:'Case · One ad slot, three advertisers · three parts',h:'Who wins the impression?',
 body:'<div class="work">Ad   Optimised for   Bid            Estimated action rate        User value\nX    clicks          ₹40 / click    CTR 2.5%                      0.20\nY    clicks          ₹90 / click    CTR 1.0%                      0.10\nZ    conversions     ₹1,500 / conv  CTR 2.0% × CVR 3.0%           0.25</div>Meta ranks ads by <b>total value = bid × estimated action rate + user value</b> (illustrative units, comparable across ads).'};

QUIZ.push(
/* ---------------- Meta Buying & the Auction ---------------- */
 {t:'auction',tag:'concept',diff:'medium',
  q:'A film studio wants a <b>fixed, pre-booked</b> cost and predictable delivery for a trailer’s awareness push. Which buying type fits?',
  opts:['Reservation — fixed-cost pre-booking for awareness and engagement',
        'Auction — real-time bidding gives the most predictable delivery cost',
        'TRP buying — any advertiser can buy Meta like TV on Nielsen ratings',
        'Auction with a cost cap — this turns any campaign into a reservation'],
  why:'<b>Meta sells ads three ways.</b><div class="work">Auction     → real-time bidding for every impression; ranked by total value\nReservation → fixed-cost pre-booking (formerly Reach & Frequency);\n              Awareness and Engagement only\nTRP         → TV-like costing on Nielsen target rating points; select advertisers only</div>Auctions are efficient but not fixed. TRP buying is not open to every advertiser.<br><br>Predictability costs flexibility: reservation locks both price and plan.'},

 {t:'auction',tag:'case',diff:'medium',scene:S_AUCT,
  q:'<b>Part 1.</b> Rank the three ads by total value. Who wins the slot?',
  opts:['X wins (1.20) · Z 1.15 · Y 1.00',
        'Y wins (₹90) · X ₹40 · Z ₹1,500 per conv',
        'Z wins (1.15) · X 1.20 · Y 1.00 trails',
        'X and Z tie (1.20) · Y trails at 0.90'],
  why:'<b>Total value = bid × estimated action rate + user value.</b><div class="work">X: 40 × 2.5%              = 1.00 + 0.20 = 1.20\nY: 90 × 1.0%              = 0.90 + 0.10 = 1.00\nZ: 1,500 × (2% × 3%)      = 0.90 + 0.25 = 1.15</div>Y has the highest bid per click and finishes last. Ranking by bid alone is the trap the auction is designed to avoid.<br><br>The auction balances advertiser value (bid × action rate) with consumer experience (user value).',
  trap:true},

 {t:'auction',tag:'case',diff:'hard',scene:S_AUCT,
  q:'<b>Part 2.</b> Y wants to win. What bid per click would it need at its current 1% CTR — and what is the cheaper route?',
  opts:['About ₹110 per click — or lift CTR to 1.5% with better creative',
        'About ₹91 per click — just one rupee above its current bid of ₹90',
        'About ₹120 per click — the bid has to match X’s total value',
        'Any bid works — the highest bidder always wins in the end'],
  why:'<b>Solve for the bid that beats 1.20.</b><div class="work">bid × 1% + 0.10 > 1.20 → bid > (1.20 − 0.10) ÷ 0.01 = ₹110\nAlternative: CTR 1.5% at ₹90 → 1.35 + 0.10 = 1.45 (wins)</div>A 22% higher bid is paid on every click; a better creative raises the action rate for free.<br><br>That is why creative is the main optimisation lever in an AI auction.'},

 {t:'auction',tag:'case',diff:'medium',scene:S_AUCT,
  q:'<b>Part 3.</b> X’s ad starts drawing “hide ad” feedback, and its user value falls from 0.20 to 0.05. What happens?',
  opts:['Z now wins — X falls to 1.05, below Z’s 1.15',
        'X still wins — its bid and CTR are unchanged',
        'Y now wins — any drop in X lifts Y to the top',
        'Nobody wins — the slot goes unsold this time'],
  why:'<b>User value is part of the score, not a tie-breaker.</b><div class="work">X: 1.00 + 0.05 = 1.05\nZ: 0.90 + 0.25 = 1.15  ← wins\nY: 0.90 + 0.10 = 1.00</div>Poor quality and negative feedback cost an advertiser the auction, or force it to pay more to win.<br><br>Relevance and quality protect both reach and cost.'},

 {t:'auction',tag:'concept',diff:'medium',cols:['Level','Set here'],
  q:'Match each level of a Meta campaign to what is set there.',
  match:[['Campaign','Objective'],['Ad set','Performance goal, targeting and placement'],['Ad','Creative and landing page']],
  why:'One campaign holds one objective. Each ad set chooses how to optimise, whom to reach and where; each ad carries the creative and the landing page. Test audiences at ad-set level and creatives at ad level.'},

 {t:'auction',tag:'calc',diff:'medium',
  q:'Meta’s average price per ad rose 14% year on year while ad impressions grew 10%. Roughly how much should ad revenue have grown?',
  given:['Price per ad +14%','Impressions +10%'],
  opts:['About 25% — growth multiplies: 1.14 × 1.10',
        'About 24% — the two rates simply add up',
        'About 4% — price growth minus volume growth',
        'About 14% — revenue follows price alone'],
  why:'<b>Revenue = impressions × price per ad, so the growth rates multiply.</b><div class="work">1.14 × 1.10 = 1.254 → about +25%\nReported ad revenue: $63.1 B, +26%</div>Adding gives 24%, which understates it; the gap is the 1.4-point cross term. Price rising faster than volume means advertisers are competing harder for the same attention.<br><br>For advertisers this shows up as rising CPMs.'},

 {t:'auction',tag:'calc',diff:'medium',
  q:'Meta’s total revenue grew 26% while its daily users grew 3%. About how much did average revenue per person grow?',
  opts:['About 22–23%',
        'About 29%',
        'About 26%',
        'About 8.7%, one third of it'],
  why:'<b>Revenue per person = revenue ÷ people, so divide the growth factors.</b><div class="work">1.26 ÷ 1.03 = 1.223 → about +22%\nReported: $17.72 per person, +23%</div>29% adds the two; 26% ignores user growth. Revenue grew faster than users because ads sold for more.<br><br>Rising revenue per user on a flat user base is what advertisers feel as auction inflation.'},

 {t:'auction',tag:'concept',diff:'medium',
  q:'The old Meta campaign picker grouped objectives into awareness, consideration and conversion. What replaced it?',
  opts:['ODAX — six outcome-driven objectives',
        'Advantage+ — one fully automated objective',
        'TRP buying — rating-point based objectives',
        'A three-stage funnel with eleven objectives'],
  why:'<b>Outcome-Driven Ad Experiences (ODAX) ties every campaign to an outcome.</b><div class="work">Old: Awareness (brand awareness, reach)\n     Consideration (traffic, engagement, app installs, video views, lead gen, messages)\n     Conversion (conversions, catalog sales, store traffic)\nODAX: Awareness · Traffic · Engagement · Leads · App promotion · Sales\n      (six on Auction; two of them also on Reservation)</div>Video views and messages are now performance goals inside objectives rather than objectives of their own.<br><br>Pick the outcome first, then the goal that gets you there.'},

/* ---------------- Objectives, Goals & Landing Pages ---------------- */
 {t:'objectives',tag:'apply',diff:'medium',
  q:'A real-estate developer wants phone numbers from interested buyers without sending them to a website. Which objective and destination?',
  opts:['Leads, with instant forms',
        'Traffic, with a website',
        'Engagement, with a Meta page',
        'Sales, with website and app'],
  why:'<b>Leads collects contact details from interested people; instant forms capture them inside Meta.</b><div class="work">Leads destinations: instant forms · instant forms + Messenger · Instagram\n                    website · Messenger · calls · app</div>Traffic sends people somewhere; it does not collect a lead. Sales is for purchases.<br><br>Instant forms remove the landing page — fewer drop-offs, though often lower-quality leads.'},

 {t:'objectives',tag:'apply',diff:'medium',
  q:'A D2C skincare brand wants Meta to find people likely to place <b>higher-value</b> orders on its website. Which objective and goal?',
  opts:['Sales — value of conversions',
        'Sales — link clicks',
        'Traffic — landing page views',
        'Leads — conversion leads'],
  why:'<b>Value of conversions optimises for higher-value purchases; it is unique to Sales (website) and App promotion (in-app).</b><div class="work">Sales goals: conversions · value of conversions (both unique to Sales)\n            landing page views · link clicks · daily unique reach\n            impressions · app events · calls</div>Link clicks and landing page views buy visits, not buyers. Conversion leads is a Leads goal.<br><br>Optimise for the outcome you actually want — you get the cheapest instance of whatever you choose.'},

 {t:'objectives',tag:'concept',diff:'medium',cols:['Objective','A performance goal unique to it'],
  q:'Match each objective to a performance goal that only it offers.',
  match:[['Awareness','Ad recall lift'],['Engagement','Page likes'],['Leads','Conversion leads'],
         ['App promotion','App installs'],['Sales','Value of conversions on the website']],
  why:'Traffic is the odd one out: all six of its goals are shared with other objectives. Awareness also has Reach as a unique goal; Leads also has Leads; Sales also has (value-based) Conversions; App promotion also has in-app Value of conversions.'},

 {t:'objectives',tag:'apply',diff:'medium',trap:true,
  q:'A Traffic campaign optimised for <b>link clicks</b> gets 20,000 clicks but only 8,000 landing-page views. What should change?',
  opts:['Switch the goal to landing page views — Meta then finds people who actually load the page',
        'Keep link clicks — the clicks are real, so the website must be failing to record them',
        'Switch the objective to Awareness — it reaches far more people for exactly the very same budget',
        'Raise the budget — more clicks will eventually turn into more landing-page views'],
  why:'<b>You get the cheapest instance of the event you optimise for.</b><div class="work">Page-view rate = 8,000 ÷ 20,000 = 40%\nLink clicks → includes accidental and bounce-before-load taps\nLanding page views → people who actually loaded the page</div>Both goals sit inside Traffic, so the objective stays the same; only the performance goal changes.<br><br>Then check page speed — slow pages lose clicks whatever the goal.'},

 {t:'objectives',tag:'concept',diff:'medium',
  q:'A 12-second video is watched to the end. Which awareness goals does that view count towards?',
  opts:['Both ThruPlay and 2-second continuous views',
        'Only 2-second continuous views, not ThruPlay',
        'Only ThruPlay, not 2-second continuous views',
        'Neither — ThruPlay needs at least 15 seconds'],
  why:'<b>ThruPlay = at least 15 seconds, or the whole video if it is shorter.</b><div class="work">12-s video watched fully → ThruPlay ✓\n2 continuous seconds with ≥50% of pixels on screen → 2-second view ✓</div>The trap is applying the 15-second rule to a shorter video. A full view of a short video is a ThruPlay.<br><br>Short videos make ThruPlay easier to earn — compare completion across similar lengths.'},

 {t:'objectives',tag:'concept',diff:'medium',cols:['Objective','Conversion landing pages'],
  q:'Match each objective to its set of conversion landing pages.',
  match:[['Awareness','None — no landing page to choose'],['Traffic','Website, app, messaging app, calls'],
         ['Engagement','Ad, Meta page, messaging app, website, app'],['Leads','Instant forms, Messenger, Instagram, website, calls, app'],
         ['App promotion','App only'],['Sales','Website, app, website + app, messaging apps, calls']],
  why:'Awareness optimises for reach and recall, so it has no conversion location. App promotion has a single destination. Leads has the most (seven, counting instant forms + Messenger). Only Engagement can keep the action on the ad itself.'},

 {t:'objectives',tag:'apply',diff:'medium',
  q:'A café chain wants people to start WhatsApp chats to book tables. Which pairing fits best?',
  opts:['Engagement — conversations, sent to a messaging app',
        'Awareness — reach, sent to a messaging app',
        'App promotion — app events, sent to the app',
        'Sales — value of conversions, sent to a brand website'],
  why:'<b>Conversations reach people most likely to message you; a messaging app is a valid destination.</b><div class="work">Conversations goal: in Traffic, Engagement and Leads\nMessaging app destination: Traffic, Engagement, Sales (messaging apps)\nAwareness: no landing page at all</div>Awareness cannot send people anywhere. App promotion needs an app; a website purchase is not a table booking.<br><br>Start a chat when the product needs a conversation before the sale.'},

 {t:'objectives',tag:'concept',diff:'medium',
  q:'Which objective has <b>no</b> performance goal unique to it?',
  opts:['Traffic',
        'Awareness',
        'Leads',
        'App promotion'],
  why:'<b>Every Traffic goal is shared with another objective.</b><div class="work">Traffic: landing page views · link clicks · daily unique reach\n         conversations · impressions · calls\nGoal counts: Awareness 5 · Traffic 6 · Engagement 10 · Leads 10\n             App promotion 4 · Sales 8</div>Traffic is the objective for getting people somewhere, and every way of measuring that exists elsewhere too.<br><br>Unique goals reveal what each objective exists for.'},

 {t:'objectives',tag:'apply',diff:'hard',
  q:'When is a Sales, App promotion or Leads campaign an <b>Advantage+</b> campaign?',
  opts:['When the audience, placement and campaign-budget automations are all on',
        'When the advertiser uploads at least one customer list as a seed audience',
        'When the daily budget crosses a minimum threshold set for the ad account',
        'When manual placements are chosen and the creative is locked to one ad'],
  why:'<b>Advantage+ hands Meta’s AI three decisions: audience, placements and campaign budget.</b><div class="work">You provide: goal · budget · creative · signal (conversion data)\nMeta decides: audience · placements · budget split · which creative shows</div>Locking placements or creative is the opposite of Advantage+. A seed list helps, but it is not the switch.<br><br>The AI learns from conversion data — weak tracking means weak Advantage+.'},

 {t:'objectives',tag:'calc',diff:'hard',trap:true,
  q:'Meta reports Advantage+ audience cuts cost per result by 7.2%. A brand spends ₹5,00,000 at ₹500 per sale. How many more sales does the same budget buy?',
  given:['Budget ₹5,00,000','CPA ₹500','Cost per result −7.2%'],
  opts:['About 78 more — 1,078 sales at ₹464 each',
        'About 72 more — 7.2% of the 1,000 sales',
        'About 36 more — half the saving goes to fees',
        'About 7 more — 7.2% of 100 sales a day'],
  why:'<b>A lower cost per result raises results by 1 ÷ (1 − 7.2%) − 1, not by 7.2%.</b><div class="work">Old: 5,00,000 ÷ 500         = 1,000 sales\nNew CPA: 500 × 0.928        = ₹464\nNew: 5,00,000 ÷ 464         ≈ 1,078 sales (+7.8%)</div>The 72 answer treats a cost cut as a volume lift of the same size.<br><br>And the 7.2% is Meta’s own number — check sales in your own data, not only Ads Manager.'},

 {t:'objectives',tag:'apply',diff:'medium',
  q:'A new brand with patchy pixel tracking, two creatives and a small budget asks whether to switch on Advantage+. What is the right call?',
  opts:['Not yet — the AI needs good conversion data and many creatives to learn',
        'Yes — Advantage+ works best when data and creatives are both limited',
        'Yes — Advantage+ guarantees a 7.2% lower cost for every advertiser',
        'No — Advantage+ is only available for awareness and traffic campaigns today'],
  why:'<b>Advantage+ trades control for automation, and the automation runs on data.</b><div class="work">Pros: less manual setup · finds buyers beyond your targeting\n      budget moves to what works · lower cost per result (per Meta)\nCons: less control · needs good data · needs many creatives\n      results are Meta’s own</div>Fix tracking and build a creative bank first. The 7.2% is an average Meta reports, not a guarantee. Advantage+ applies to Sales, App promotion and Leads.<br><br>Automation amplifies good inputs and bad ones alike.'},

 {t:'objectives',tag:'concept',diff:'medium',
  q:'In what order do you build a Meta campaign’s goal?',
  opts:['Objective → performance goal → conversion landing page',
        'Landing page → performance goal → objective',
        'Performance goal → objective → landing page',
        'Objective → landing page → audience → bid amount → the ad'],
  why:'<b>Pick the objective, then the performance goal Meta optimises for, then the landing page where people act.</b><div class="work">Objective (six)     → sets the campaign goal\nPerformance goal    → what Meta optimises for\nConversion location → where people take action</div>The objective decides who sees the ad and what Meta optimises for: objective → audience → optimisation → output.<br><br>Change the goal before you change the objective — most fixes live one level down.'}
);

/* ---------------- lessons ---------------- */
LESSONS.auction={eyebrow:'Section 10', title:'Meta Buying & the Auction', sub:'how Meta sells an impression, and how one ad beats another',
 steps:[
  {type:'table', title:'Three ways to buy', head:['Buying type','How it works','Who / when'],
   rows:[['Auction','Real-time bidding for every impression; ranked by total value, not bid alone','All advertisers; all six objectives'],
         ['Reservation','Fixed-cost pre-booking (formerly Reach & Frequency)','Awareness and Engagement only'],
         ['Target rating point','TV-like costing on Nielsen TRP','Select advertisers']]},
  {type:'formula', pill:'Total value = advertiser bid × estimated action rate + user value',
   legend:[['Click-optimised','Bid for click × estimated CTR + relevance / quality'],
           ['Conversion-optimised','Bid for conversion × estimated (CTR × CVR) + relevance / quality'],
           ['Balance','Maximise advertiser value; protect the consumer experience']]},
  {type:'calc', calc:'metaAuction', title:'Live: run a two-ad auction'},
  {type:'table', title:'Campaign structure', head:['Level','Set here'],
   rows:[['Campaign','Objective'],['Ad set','Performance goal, targeting, placement'],['Ad','Creative, landing page']]},
  {type:'table', title:'Meta in numbers (Q3 2026)', head:['Figure','Value','Read it as'],
   rows:[['Average price per ad','+14% YoY','Faster than impressions (+10%) → rising CPMs'],
         ['Ad revenue','$63.1 B, +26%','≈ 1.14 × 1.10'],
         ['Revenue per person','$17.72, +23%','≈ 1.26 ÷ 1.03 (users +3%)']]},
  {type:'watch', title:'Traps in this section',
   body:'The highest bid does not win by itself. Growth rates <b>multiply</b> (1.14 × 1.10), they do not add. Reservation is only for Awareness and Engagement; TRP buying is only for select advertisers.'}],
 check:[
  {t:'auction',tag:'calc',diff:'easy',
   q:'Bid ₹50 per click, estimated CTR 2%, user value 0.10. Total value?',
   opts:['1.10','1.00','52.1','0.12'],
   why:'50 × 2% = 1.00, plus user value 0.10 = 1.10. 1.00 forgets user value; the others misplace the percentage.'},
  {t:'auction',tag:'concept',diff:'easy',
   q:'Where is the performance goal set?',
   opts:['Ad set','Campaign','Ad','Account'],
   why:'The campaign sets the objective; the ad set sets the performance goal, targeting and placement; the ad carries creative and landing page.'}]};

LESSONS.objectives={eyebrow:'Section 11', title:'Objectives, Goals & Landing Pages', sub:'objective → performance goal → conversion location',
 steps:[
  {type:'table', title:'Six ODAX objectives', head:['Objective','Purpose','Goals','Unique goals','Landing pages'],
   rows:[['Awareness','Show ads to people most likely to remember them','5','Reach, ad recall lift','None'],
         ['Traffic','Send people to a destination','6','None','Website, app, messaging app, calls'],
         ['Engagement','Get people to interact with the ad','10','Page likes','Ad, Meta page, messaging app, website, app'],
         ['Leads','Collect leads','10','Leads, conversion leads','Instant forms (± Messenger), Instagram, website, Messenger, calls, app'],
         ['App promotion','Installs and in-app purchases','4','App installs, value of conversions (in-app)','App'],
         ['Sales','Purchases','8','Conversions (value-based), value of conversions (website)','Website, app, website + app, messaging apps, calls']]},
  {type:'table', title:'Goal definitions that get tested', head:['Goal','Means'],
   rows:[['ThruPlay','≥15 seconds watched, or the whole video if shorter'],['2-second continuous view','≥2 continuous seconds with ≥50% of pixels on screen'],
         ['Daily unique reach','Reach people no more than once a day'],['Landing page views','People who load the page — not just click'],
         ['Conversion leads','People likely to convert after sharing contact details'],['Frequency cap','Optional in Awareness: limits how often people see the ad']]},
  {type:'table', title:'Advantage+', head:['You provide','Meta decides'],
   rows:[['Goal (objective)','Audience'],['Budget','Placements'],['Creative (images, video, text)','Budget split across ad sets'],['Signal (conversion data)','Which creative shows']]},
  {type:'text', title:'When to use Advantage+',
   body:'A Sales, App promotion or Leads campaign is Advantage+ when the <b>audience, placement and campaign-budget</b> automations are all on. <b>Pros:</b> less manual setup; finds buyers beyond your targeting; budget moves to what works; 7.2% lower cost per result on Sales and App promotion (per Meta). <b>Cons:</b> less control; needs good data; needs many creatives; results are Meta’s own — check sales and lead quality in your own data.'},
  {type:'watch', title:'Source notes and traps',
   body:'“Conversions” and “value of conversions” appear under several objectives with different scopes: not value-based in Engagement and Leads, value-based in Sales, website vs in-app for value of conversions. Learn them with their qualifier. A 7.2% cost cut buys about 7.8% more results, not 7.2%.'}],
 check:[
  {t:'objectives',tag:'concept',diff:'easy',
   q:'Which objective sends people only to an app?',
   opts:['App promotion','Sales','Traffic','Engagement campaigns'],
   why:'App promotion has a single conversion location, the app. Sales and Traffic offer the app among several destinations.'},
  {t:'objectives',tag:'concept',diff:'easy',
   q:'Which goal is unique to Engagement?',
   opts:['Page likes','ThruPlay views','Link clicks','Conversations'],
   why:'Page likes is the only Engagement goal not offered elsewhere; ThruPlay, link clicks and conversations are shared.'}]};

/* ---------------- calculator ---------------- */
CALCS.metaAuction={
 hint:'Two ads compete for one slot. Total value = bid × action rate + user value.',
 ins:[{k:'b1',nm:'Ad A bid per click ₹',type:'number',def:40},{k:'c1',nm:'Ad A CTR %',type:'number',def:2.5},{k:'u1',nm:'Ad A user value',type:'number',def:0.2},
      {k:'b2',nm:'Ad B bid per click ₹',type:'number',def:90},{k:'c2',nm:'Ad B CTR %',type:'number',def:1},{k:'u2',nm:'Ad B user value',type:'number',def:0.1}],
 run:v=>{
   const a=v.b1*v.c1/100+ +v.u1, b=v.b2*v.c2/100+ +v.u2, w=a>=b?'A':'B';
   const need=v.c2>0?((a-v.u2)/(v.c2/100)):0;
   return 'A: '+v.b1+' × '+v.c1+'% + '+v.u1+' = '+a.toFixed(2)+'\nB: '+v.b2+' × '+v.c2+'% + '+v.u2+' = '+b.toFixed(2)+
     '<span class="big">Ad '+w+' wins</span>'+(w==='A'?'<span class="vd">B would need a bid above ₹'+need.toFixed(0)+' at '+v.c2+'% CTR — or a better CTR.</span>':'<span class="vd ok">The higher score wins, whatever the bid.</span>');}};

/* ---------------- map ---------------- */
CMAP.splice(CMAP.length-1,0,{h:'Meta objectives & the auction',
 rows:[['Buying','Auction · reservation (Awareness, Engagement) · TRP (select)'],
       ['Total value','Bid × estimated action rate + user value','X 1.20 beats Y’s ₹90 bid at 1.00'],
       ['Structure','Campaign: objective · ad set: goal, targeting, placement','ad: creative, landing page'],
       ['ODAX','Awareness · Traffic · Engagement · Leads · App promotion · Sales','goals 5 · 6 · 10 · 10 · 4 · 8'],
       ['Unique goals','Recall lift, reach · none · page likes · leads, conversion leads','app installs · value of conversions'],
       ['Landing pages','Awareness none · App promotion app only','Leads has the most'],
       ['Advantage+','Audience + placements + campaign budget all automated','Sales, App promotion, Leads'],
       ['Growth maths','Rates multiply: 1.14 × 1.10 ≈ +25%','cost −7.2% → results +7.8%']]});

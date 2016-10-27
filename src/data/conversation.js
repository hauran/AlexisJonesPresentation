module.exports = [
  {
    aj:true,
    message:[
      {text:'Hello.  I\'m Alexis Jones'}
    ]
  },
  {
    message:[
      {text:'Hi Alexis.  Who are you?'}
    ]
  },
  {
    aj:true,
    message:[
      {text:'I\'m a robotic assistant for GLG Research Managers.'}
    ]
  },
  {
    message:[
      {text:'but why?'}
    ]
  },
  {
    aj:true,
    message:[
      {text:'I am the first of many steps to reach the dream of automatically inviting quality council members to projects.  Research Managers will just come into the office in the morning and GTC. Wouldn\'t that be cool?'}
    ]
  },
  {
    message:[
      {text:'is there really a need to do that?'}
    ]
  },
  {
    aj:true,
    message:[
      {text:'I think so for a couple of reasons.'},
      {text:'1. On any given day, there are ~150k Mosaic searches and 8k attaches.  So searching for CMs sucks, requiring 18 searches to attach 1 CM.'},
      {text:'2. We are leaving a lot of money on the table in terms of missed calls. Here\'s what I mean:'},
      {
        text:'In 2015, clients wanted to talk to 27,350 experts. GLG only completed 11,334 calls leaving 16,016 missed opportunities.',
        link:['https://gist.github.com/hauran/2adb21f24eab571fee5cc938eebb25cc']
      },
      {__html:'That\'s <b>19 million dollars</b> of implied value that clients wanted to give us, but couldn\'t.'}
    ]
  },
  {
    message:[
      {text:'And what are you doing to fix this?'}
    ]
  },
  {
    aj:true,
    message:[
      {
        text:'Right now, I am just attaching CMs to consultations.  Then email the primary and delegate RMs to let them know they have new CMs to evaluate.  Check out Simulacrum.',
        link:['https://github.com/glg/simulacrum/blob/master/lib/attach.js']
      }
    ]
  },
  {
    message:[
      {text:'You any good?'}
    ]
  },
  {
    aj:true,
    message:[
      {__html:'We will see. I am just an experiment, and only the first step.  So far I have over <b>1800 TPVs</b>. That\'s <b>$2.16 million</b> implied value, since March.  Not too shabby, eh?. But still lots of work to be done.'}
    ]
  },
  {
    message:[
      {text:'That is pretty good.  What other data do you have? Can you be more specific?'}
    ]
  },
  {
    aj:true,
    message:[
      {
        text:'Obvi.  Here\'s a nice chart with data stuff.',
        img: 'img/funnel.png',
        link:['https://jobs.glgresearch.com/simulacrum-stats/#/conversion_funnel']
      }
    ]
  },
  {
    message:[
      {text:'And what else you working on?'}
    ]
  },
  {
    aj:true,
    message:[
      {
        text:'Glad you asked.  I\'m more then just an email. I am also in Streamliner, recommending even more CMs.  This is currently in beta for only PSF Americas.',
        img: 'img/recommender.png',
        link:['https://services.glgresearch.com/streamliner/#/consultation/2285749']
      }
    ]
  },
  {
    message:[
      {text:'How\'s that going?'}
    ]
  },
  {
    aj:true,
    message:[
      {
        text:'Too early to tell.  It\'s only been open for a couple of months, so there haven\'t been too many conversions yet, about 70 so far. But I\'m hoping to open it up to a wider audience soon. Here are some recent stats.',
        img: 'img/funnel-ui.png',
        link:['https://jobs.glgresearch.com/simulacrum-stats/#/streamliner_ui']
      }
    ]
  },
  {
    message:[
      {text:'that\'s cool. What\'s powering your recommendations?'}
    ]
  },
  {
    aj:true,
    message:[
      {
        text:'I have a few of algorithms I\'m testing out. cohorts v0.0.2, cohorts v0.1.0, and hyperscience. I\'m tracking the progress to see which one has the best results.',
        img: 'img/algo.png',
        link:['https://jobs.glgresearch.com/simulacrum-stats/#/algo', 'https://github.com/glg/cohorts']
      }
    ]
  },
  {
    message:[
      {text:'interesting. and any future ideas you got cooking?'}
    ]
  },
  {
    aj:true,
    message:[
      {
        text: 'So right now, I am just attaching right? But in the next couple of months I will start auto-inviting, called Inquiries.  I think that\'s when the TPVs will really take off because with these current attaches, the RMs have  to invite the CMs, which is unreliable. With the Inquries, the RMs are out of the picture.',
      },
      {
        __html: 'I estimate that Inquiries will result in minimum of <b>5,400 TPVs</b> or <b>$6.48 million</b> in implied value.',
        link:['https://gist.github.com/hauran/840ca510019fb8810636c379b7628a1e']
      }
    ]
  }
]

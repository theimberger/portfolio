import wikiImg from '../static/wikipedia-crawler.png'
import nhofIng from '../static/nhof.png'
import cgImg from '../static/color-game.png'
import relaxImg from '../static/relax.png'

const ProjectData = [
  {
    id: 10,
    title: 'wikipedia crawler',
    liveURL: 'https://theimberger.github.io/wikipedia_crawler/',
    githubRepo: 'https://github.com/theimberger/wikipedia_crawler',
    image: wikiImg,
    description: 'A JavaScript based web game that traverses between two user given topics.  Think \'Six Degrees of Kevin Bacon\' but more flexible.  The crawler\'s path is visualized using D3 as a poly tree.',
  },
  {
    id: 11,
    title: 'name hall of fame',
    liveURL: 'http://www.namehalloffame.org',
    githubRepo: 'https://github.com/theimberger/nhof',
    image: nhofIng,
    description: 'The Name Hall of Fame is a pet project I worked on with my brother (a graphic designer), Max Heimberger. The idea is born of inside joke between us and our friend Collin and the purpose is to document the greatest names ever bequeathed.  It uses a React frontend and a Rails backend.',
  },
  {
    id: 12,
    title: 'simple color game',
    liveURL: 'https://theimberger.github.io/color-game/',
    githubRepo: 'https://github.com/theimberger/color-game',
    image: cgImg,
    description: 'A basic game where the player identifies the off-color tile.  Built so I could learn more about Vue.js.',
  },
  {
    id: 13,
    title: 'relax',
    liveURL: 'http://www.relax-chat.com/',
    githubRepo: 'https://github.com/theimberger/relax',
    image: relaxImg,
    description: 'A clone of the workspace chat app slack.  Built using React and Ruby on Rails.  Hosted on Heroku, uses web socketing to maintain realtime server-client connections.',
  },
]

export default ProjectData
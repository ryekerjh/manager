export class MainController {
  constructor () {
    'ngInject';

    this.states = ['CA', 'NV', 'AZ'];

    this.companies = [
      {
        name: 'Smoke Shop',
        tagline: 'Modern Cannabis Brand',
        location: 'Toronto',
        website: 'tokyosmoke.com',
        phone: '1234567890',
        email: 'tsmoke@gmail.com',
        industry: 'branding',
        type: 'public',
        companySize: '1-10 Employees',
        yearFounded: '2015',
        socialMedia: {
          twitter: '@tokyo_smoke',
          instagram: '',
          facebook: ''
        },
        description: 'What We\'re Building Tokyo Smoke is one of the hottest startups in the fastest growing industry in the United States. Based in Toronto, Tokyo Smoke is a modern brand for the modern Cannabis consumer. Through immersive retail (coffee shop / head shops) and digital experiences, Tokyo Smoke is the first sophisticated luxury brand inclusive of Cannabis. With our entrenched high design brand that elevates the “Cannabis experience” our premium product is in high demand. We\'ve scaled our brand though licensing deals where Tokyo Smoke generates its revenue through royalty payments - ultimately a +80% EBITDA business. Our brand includes Coffee x Clothing x Cannabis through licensing deals. Milestones  * Coffee shop opened in Toronto in 2015, Top 5 finalist for Best Designed Coffee Shop in the World* * Tokyo Smoke Cannabis to hit shelves in H1 ‘16 in Washington State, H2\'16 California and Oregon  * Tokyo Smoke Clothing has shipped to retailers for Fall\'15 & Spring \'16, with a highly successful 90% sell-through'
      },
      {
        name: 'Glass Company',
        tagline: 'Turning fascinating plants into loveable products',
        location: 'Europe, Barcelona',
        contactInfo: {
          website: 'meetharmony.com',
          phone: '1234567890',
          email: 'harmony@gmail.com',
          socialMedia: {
            twitter: '',
            instagram: '',
            facebook: ''
          }
        },
        companyInfo: {
          industry: 'hemp',
          type: 'public',
          companySize: '1-10 Employees',
          yearFounded: ''
        },
        description: 'What We\'re Building Harmony™ is the leading European hemp innovator. We specialize in Cannabidiol (CBD), a natural component of hemp. From organic hemp grown in family farms to the distribution of CBD-based goods, we certify the quality of our products and we apply the highest quality control of the industry.'
      }
    ];

  }
}

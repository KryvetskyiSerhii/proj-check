import facebookLight from 'assets/icons/white/small/facebookLight.svg'
import instagramLight from 'assets/icons/white/small/instagramLight.svg'
import twitterLight from 'assets/icons/white/small/twitterLight.svg'
import facebookBlack from 'assets/icons/new/black/small/facebookBlack.svg'
import instagramBlack from 'assets/icons/new/black/small/instagramBlack.svg'
import twitterBlack from 'assets/icons/new/black/small/twitterBlack.svg'
import paperPlaneBlack from 'assets/icons/new/black/small/paperPlaneBlack.svg'
import paperPlaneLight from 'assets/icons/new/white/small/paperPlaneLight.svg'
import img1 from 'assets/images/slider/img1.jpg'
import img2 from 'assets/images/slider/img2.jpg'
import img3 from 'assets/images/slider/img3.jpg'
import img4 from 'assets/images/slider/img4.jpg'
import img5 from 'assets/images/slider/img5.jpg'
import img6 from 'assets/images/slider/img6.jpg'
import img7 from 'assets/images/slider/img7.jpg'
import img8 from 'assets/images/slider/img8.jpg'
import img9 from 'assets/images/slider/img9.jpg'
import img10 from 'assets/images/slider/img10.jpg'
import { v4 as uuidv4 } from 'uuid'
import encryptionColor from 'assets/images/mainPage/encryptionColor.svg'
import findColor from 'assets/images/mainPage/findColor.svg'
import happyColor from 'assets/images/mainPage/happyColor.svg'
import safetyColor from 'assets/images/mainPage/safetyColor.svg'
import encryptionMono from 'assets/images/mainPage/encryptionMono.svg'
import findMono from 'assets/images/mainPage/findMono.svg'
import happyMono from 'assets/images/mainPage/happyMono.svg'
import safetyMono from 'assets/images/mainPage/safetyMono.svg'

export const SOCIAL_NETWORKS = [
  {
    name: 'facebook',
    imgLight: facebookLight,
    imgBlack: facebookBlack,
  },
  {
    name: 'instagram',
    imgLight: instagramLight,
    imgBlack: instagramBlack,
  },
  {
    name: 'twitter',
    imgLight: twitterLight,
    imgBlack: twitterBlack,
  },
  {
    name: 'telegram',
    imgLight: paperPlaneLight,
    imgBlack: paperPlaneBlack,
  },
]

export const NAV_MODULE_MENU = [
  {
    id: Date(),
    name: 'About Us',
    link: 'about',
    link2: '/about',
  },
  {
    id: Date(),
    name: 'News',
    link: 'blog/',
    link2: '',
  },
  {
    id: Date(),
    name: 'Support',
    link: 'blog/supprt',
    link2: 'support',
  },

  {
    id: Date(),
    name: 'Contacts',
    link: 'blog/contacts',
    link2: 'contacts',
  },
]

export const ADS_MENU = [
  {
    name: 'Job Ads',
    link: '',
    id: 'jobads',
  },
  {
    name: 'About Private Job Ads',
    link: 'aboutads',
    id: 'aboutads',
  },
]

export const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cura??ao',
  'Cyprus',
  'Czechia',
  "C??te d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'R??union',
  'Saint Barth??lemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  '??land Islands',
]

export const SLIDER = [
  {
    id: uuidv4(),
    title: 'First title',
    text: 'First text',
    img: img1,
  },
  {
    id: uuidv4(),
    title: 'Second title',
    text: 'Second text',
    img: img2,
  },
  {
    id: uuidv4(),
    title: 'Third title',
    text: 'Third text',
    img: img3,
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img4,
  },
]

export const CAROUSEL = [
  {
    id: uuidv4(),
    title: 'First title',
    text: 'First text',
    img: img1,
    milestone: 'Milestone 1',
  },
  {
    id: uuidv4(),
    title: 'Second title',
    text: 'Second text',
    img: img2,
    milestone: 'Milestone 2',
  },
  {
    id: uuidv4(),
    title: 'Third title',
    text: 'Third text',
    img: img3,
    milestone: 'Milestone 3',
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img4,
    milestone: 'Milestone 4',
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img5,
    milestone: 'Milestone 5',
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img6,
    milestone: 'Milestone 6',
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img7,
    milestone: 'Milestone 7',
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img8,
    milestone: 'Milestone 8',
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img9,
    milestone: 'Milestone 9',
  },
  {
    id: uuidv4(),
    title: 'Fourth title',
    text: 'Fourth text',
    img: img10,
    milestone: 'Milestone 10',
  },
]

export const CONTENT_BlOCK = [
  {
    title: 'Searching faster',
    imgColor: findColor,
    imgMono: findMono,
    animation: 'animate__fadeInLeft',
    id: 'find',
  },
  {
    title: 'Encryption of data',
    imgColor: encryptionColor,
    imgMono: encryptionMono,
    animation: 'animate__fadeInUp',
    id: 'encryption',
  },
  {
    title: 'Online safety',
    imgColor: safetyColor,
    imgMono: safetyMono,
    animation: 'animate__fadeInUp',
    id: 'safety',
  },
  {
    title: 'Happy that he has made it',
    imgColor: happyColor,
    imgMono: happyMono,
    animation: 'animate__fadeInRight',
    id: 'happy',
  },
]

export const RIGHT_CLICK_MENU = [
  {
    title: 'General search',
    id: 'results',
  },
  {
    title: 'Images',
    id: 'images',
  },
  {
    title: 'Videos',
    id: 'videos',
  },
  {
    title: 'News',
    id: 'news',
  },
  {
    title: 'Maps',
    id: 'maps',
  },
  {
    title: 'Academics',
    id: 'academics',
  },
  {
    title: 'Shopping',
    id: 'ecommerce',
  },
]

export const VIDEO_CATEGORIES_SEARCH = [
  {
    value: 'music',
    name: 'Music',
  },
  {
    value: 'movies',
    name: 'Movies',
  },
  {
    value: 'cars',
    name: 'Cars',
  },
  {
    value: 'news',
    name: 'Latest news',
  },
  {
    value: 'football',
    name: 'Football',
  },
  {
    value: 'fashion',
    name: 'Fashion',
  },
  {
    value: 'finance',
    name: 'Finance',
  },
  {
    value: 'education',
    name: 'Education',
  },
]

export const VIDEO_SORT_OPTIONS = [
  {
    value: 'date',
    name: 'By the date of update',
  },
  {
    value: 'rating',
    name: 'By rating',
  },
  {
    value: 'views',
    name: 'By number of views',
  },
]

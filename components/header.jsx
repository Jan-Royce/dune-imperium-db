import Link from 'next/link';

const filterSections = [
    {
        sectionTitle: 'Expansion',
        sectionId: 'expansion',
        items: [
            { value: 'base', img: '', alt: 'base' },
            { value: 'ix', img: '', alt: 'ix' },
            { value: 'immortality', img: '', alt: 'immortality' },
            { value: 'uprising', img: '', alt: 'uprising' },
            { value: 'bloodlines', img: '', alt: 'bloodlines' },
            { value: 'promo', img: '', alt: 'promo' }
        ],
        default: 'base'
    },
    {
        sectionTitle: 'Component',
        sectionId: 'component',
        items: [
            { value: 'card', img: '', alt: 'card' },
            { value: 'intrigue', img: '', alt: 'intrigue' },
            { value: 'leader', img: '', alt: 'leader' },
            { value: 'conflict', img: '', alt: 'conflict' },
            { value: 'tech', img: '', alt: 'tech' },
            { value: 'contract', img: '', alt: 'contract' },
            { value: 'commander_skill', img: '', alt: 'commander_skill' }
        ],
        default: ''
    },
    {
        sectionTitle: 'Factions',
        sectionId: 'factions',
        items: [
            { value: 'emperor', img: '', alt: 'EM' },
            { value: 'spacing_guild', img: '', alt: 'SG' },
            { value: 'bene_gesserit', img: '', alt: 'BG' },
            { value: 'fremen', img: '', alt: 'FR' },
            { value: 'none', img: '', alt: 'NA' }
        ],
        default: ''
    },
    {
        sectionTitle: 'Agent Icons',
        sectionId: 'agent_icons',
        items: [
            { value: 'emperor', img: '', alt: 'EM' },
            { value: 'spacing_guild', img: '', alt: 'SG' },
            { value: 'bene_gesserit', img: '', alt: 'BG' },
            { value: 'fremen', img: '', alt: 'FR' },
            { value: 'green', img: '', alt: 'G' },
            { value: 'blue', img: '', alt: 'B' },
            { value: 'yellow', img: '', alt: 'Y' },
            { value: 'none', img: '', alt: 'NA' }
        ],
        default: ''
    },
    {
        sectionTitle: 'Reveal (Persuasion)',
        sectionId: 'reveal_persuasion',
        items: [
            { value: 0, img: '', alt: '0' },
            { value: 1, img: '', alt: '1' },
            { value: 2, img: '', alt: '2' },
            { value: 3, img: '', alt: '3' },
            { value: 4, img: '', alt: '4' }
        ],
        default: ''
    },
    {
        sectionTitle: 'Reveal (Sword)',
        sectionId: 'reveal_sword',
        items: [
            { value: 0, img: '', alt: '0' },
            { value: 1, img: '', alt: '1' },
            { value: 2, img: '', alt: '2' },
            { value: 3, img: '', alt: '3' },
            { value: 4, img: '', alt: '4' },
            { value: 5, img: '', alt: '5' },
            { value: 6, img: '', alt: '6' }
        ],
        default: ''
    },
    {
        sectionTitle: 'Cost',
        sectionId: 'cost',
        items: [
            { value: 0, img: '', alt: '0' },
            { value: 1, img: '', alt: '1' },
            { value: 2, img: '', alt: '2' },
            { value: 3, img: '', alt: '3' },
            { value: 4, img: '', alt: '4' },
            { value: 5, img: '', alt: '5' },
            { value: 6, img: '', alt: '6' },
            { value: 7, img: '', alt: '7' },
            { value: 8, img: '', alt: '8' },
            { value: 9, img: '', alt: '9' }
        ],
        default: ''
    },
    {
        sectionTitle: 'Misc',
        sectionId: 'misc',
        items: [
            { value: 'unload', img: '', alt: 'unload' },
            { value: 'infiltrate', img: '', alt: 'infiltrate' },
            { value: 'graft', img: '', alt: 'graft' }
        ],
        default: ''
    },
    {
        sectionTitle: 'Card Type',
        sectionId: 'card_type',
        items: [],
        cardItems: [
            { value: 'starting', img: '', alt: 'starting' },
            { value: 'imperium', img: '', alt: 'imperium' },
            { value: 'tleilaxu', img: '', alt: 'tleilaxu' }
        ],
        intrigueItems: [
            { value: 'plot', img: '', alt: 'plot' },
            { value: 'combat', img: '', alt: 'combat' },
            { value: 'endgame', img: '', alt: 'endgame' },
            { value: 'twisted', img: '', alt: 'twisted' }
        ],
        leaderItems: [
            { value: 1, img: '', alt: '1' },
            { value: 2, img: '', alt: '2' },
            { value: 3, img: '', alt: '3' },
            { value: 4, img: '', alt: '4' }
        ],
        conflictItems: [
            { value: 1, img: '', alt: '1' },
            { value: 2, img: '', alt: '2' },
            { value: 3, img: '', alt: '3' }
        ],
        default: 'imperium'
    },
    {
        sectionTitle: 'Sort',
        sectionId: 'sort',
        items: [
            { value: 'name', img: '', alt: 'name' },
            { value: 'persuasion', img: '', alt: 'persuasion' },
            { value: 'sword', img: '', alt: 'sword' },
            { value: 'cost', img: '', alt: 'cost' }
        ],
        default: ''
    },
];

var cardType = 'card'; //update to be dynamic based on component

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <input type="text" id="search" autoComplete="off" className="w-full border-2 p-1 outline-none" placeholder="Search card name, agent box or reveal text"></input>
            {!!filterSections?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {filterSections.map((filterSection, i) => (
                        <li key={i}>
                            {filterSection.sectionTitle}
                            <ul className="flex flex-wrap gap-x-4 gap-y-1">
                                {filterSection[filterSection.sectionId == 'card_type' ? `${cardType}Items` : `items`].map((item, j) => (
                                    <li key={j}>{item.value}</li>
                                ))}
                                {filterSection.sectionId == 'sort' && (
                                    <span>ASC DESC</span>
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

function fillFields() {
    const check = new URLSearchParams(window.location.search);
    const fn = check.get('fn');
    const address = check.get('ainfo');
    const city = check.get('city');
    const st = check.get('st');
    const zip = check.get('zip');

    const fnField1 = document.querySelectorAll('[name = "contact[Full Name]"]')[0];
    const fnField2 = document.querySelectorAll('[name = "contact[Full Name]"]')[1];
    const addressField = document.querySelectorAll('[name = "contact[email]"]')[0];
    const cityField = document.querySelectorAll('[name = "contact[City]"]')[0];
    const stateField = document.querySelectorAll('[name = "contact[State]"]')[0];
    const zipField = document.querySelectorAll('[name = "contact[Zip Code]"]')[0];

    const stateDict = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NB': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexicxo',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
    }

    fnField1.value = fn
    fnField2.value = fn
    addressField.value = address
    cityField.value = city
    zipField.value = zip
    if (state.length === 2) {
        document.querySelectorAll('[value="' + stateDict[state] + '"]')[0].selected = true
    } else {
        document.querySelectorAll('[value="' + state + '"]') = true
    }
};

fillFields();

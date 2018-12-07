export const FILTERS = {
    "category": {
        "question": "Which of the following categories of resources are you interested in?",
        "options": [
            "Food",
            "Education",
            "Health",
            "Housing",
            "Family",
            "Laundry",
            "Clothing",
            "Legal",
            "Transportation",
            "Employment",
            "Youth Services",
            "Finance",
            "Utilities",
            "Child Care",
            "Other"
        ]
    },
    "gender" : {
        "question": "Which of the following best describes your gender?",
        "options": [
            "Male",
            "Female",
            "Non-binary"
        ]
    },
    "race_ethnicity" : {
        "question": "Which of the following best describes your ethnic background?",
        "options": [
            "Asian",
            "Black or African American",
            "Hispanic or Latinx",
            "White"
        ]
    },
    "age": {
        "question": "Please select the age groups you are seeking resources for:",
        "options": [
            "Children",
            "Teens",
            "Young Adults",
            "Adults",
            "Elderly"
        ]
    },
    "marital_status": {
        "question": "Please select your marital status:",
        "options": [
            "Married",
            "Widowed",
            "Divorced or Separated",
            "Single or Never Married"
        ]
    },
    "employment": {
        "question": "Please select your employment status:",
        "options": [
            "Employed",
            "Student",
            "Unemployed"
        ]
    },
    "sexual_orient": {
        "question": "Which of the following best describes your sexuality?",
        "options": [
            "Straight/Heterosexual",
            "Homosexual",
            "Bisexual"
        ]
    },
    "beliefs": {
        "question": "Which of the following best describes your religious beliefs?",
        "options": [
            "Christian",
            "Islam",
            "Judaism",
            "Secular/Agnostic/Atheist"
        ]
    },
    "criminality": {
        "question": "Have you ever been convicted of a crime?",
        "options":[
            "Yes",
            "No"
        ]
    },
    "citizenship": {
        "question": "What is your citizenship status?",
        "options": [
            "Natural Citizen",
            "Naturalized Citizen",
            "Dual Citizen",
            "Temporary Visa Holder",
            "Undocumented Immigrant"
        ]
    },
    "time_period": {
        "question": "What is the time frame for resources you are searching for? I.e. are you looking for short or long term support for your food needs?",
        "options": [
            "Short-term",
            "Long-term"
        ]
    }
}

export const PARAMS_MAPPING = {
    "category" : {
        "Food": "Food",
        "Education": "Education",
        "Health": "Health",
        "Housing": "Housing",
        "Other": "Other",
        "Family": "Family",
        "Laundry": "Laundry",
        "Clothing": "Clothing",
        "Legal": "Legal",
        "Transportation": "Transportation",
        "Employment": "Employment",
        "Youth Services": "Youth Services",
        "Finance": "Finance",
        "Utilities": "Utilities",
        "Child Care": "Child Care"
    },
    "gender": {
        "any": "any_gender",
        "Male": "male",
        "Female": "female",
        "Non-binary": "any_gender"
    },
    "race_ethnicity": {
        "any": "any_race",
        "Black or African American": "black",
        "White": "white",
        "Hispanic or Latinx": "latinx",
        "Asian": "asian"
    },
    "age": {
        "any": "any_age_group",
        "Children": "children",
        "Teens": "teens",
        "Young Adults": "young_adults",
        "Adults": "adults",
        "Elderly": "elderly"
    },
    "marital_status": {
        "any": "any_marital_status",
        "Married": "married",
        "Widowed": "widowed",
        "Divorced or Separated": "divorced",
        "Single or Never Married": "single"
    },
    "employment": {
        "any": "any_employment",
        "Employed": "any_employment",
        "Student": "student",
        "Unemployed": "unemployed"
    },
    "sexual_orient": {
        "any": "any_orientation",
        "Homosexual": "homosexual",
        "Bisexual": "bisexual",
        "Straight/Heterosexual": "heterosexual"
    },
    "beliefs": {
        "any": "any_beliefs",
        "Christian": "christian",
        "Islam": "muslim",
        "Judaism": "jewish",
        "Secular/Agnostic/Atheist": "atheist"
    },
    "criminality": {
        "any": "any_criminal_status",
        "Yes": "felon",
        "No": "non-felon"
    },
    "citizenship": {
        "any": "any_citizenship_status",
        "Natural Citizen": "us_citzen", // (SIC) ...
        "Naturalized Citizen": "us_citzen",
        "Dual Citizen": "us_citzen",
        "Temporary Visa Holder": "resident",
        "Undocumented Immigrant": "",
    },
    "time_period": {
        "any": "either",
        "Short-term": "short_term",
        "Long-term": "long_term"
    },
}
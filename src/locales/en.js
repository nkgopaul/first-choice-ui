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
        "question": "Are you searching for resources for any specific gender?",
        "options": [
            "Male",
            "Female",
            "Non-binary"
        ]
    },
    "race_ethnicity" : {
        "question": "Are you searching for resources for any specific ethnic backgrounds?",
        "options": [
            "Asian",
            "Black or African American",
            "Hispanic or Latinx",
            "White"
        ]
    },
    "age": {
        "question": "Are you searching for resources for any specific age groups?",
        "options": [
            "Children",
            "Teens",
            "Young Adults",
            "Adults",
            "Elderly"
        ]
    },
    "marital_status": {
        "question": "Are you the resources you are searching for apply to any specific marital statuses?",
        "options": [
            "Married",
            "Widowed",
            "Divorced or Separated",
            "Single or Never Married"
        ]
    },
    "employment": {
        "question": "Are the resources you are searching for apply to any specific employment statuses?",
        "options": [
            "Employed",
            "Student",
            "Unemployed"
        ]
    },
    "sexual_orient": {
        "question": "Are you searching for resources for any specific sexualities?",
        "options": [
            "Straight/Heterosexual",
            "Homosexual",
            "Bisexual"
        ]
    },
    "beliefs": {
        "question": "Are you searching for resources for any specific religious beliefs?",
        "options": [
            "Christian",
            "Islam",
            "Judaism",
            "Secular/Agnostic/Atheist"
        ]
    },
    "criminality": {
        "question": "Have you, or any of the individuals you are seeking to help, ever been convicted of a crime?",
        "options":[
            "Yes",
            "No"
        ]
    },
    "citizenship": {
        "question": "Are you searching for resources for any specific citizenship status?",
        "options": [
            "Natural Citizen",
            "Naturalized Citizen",
            "Dual Citizen",
            "Temporary Visa Holder",
            "Undocumented Immigrant"
        ]
    },
    "time_period": {
        "question": "What is the time-frame for resources you are searching for?",
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
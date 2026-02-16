// USER DUMMY DATA FORMAT

[
    {
        "name": "Karan Mehta",
        "age": 29,
        "mobile": "9123456780",
        "email": "karan.mehta@example.com",
        "address": "12, Sunrise Apartments, Andheri, Mumbai",
        "aadharCardNumber": 789012345678,
        "password": "karanPass123"
    },
    {
        "name": "Neha Kapoor",
        "age": 27,
        "mobile": "9012345678",
        "email": "neha.kapoor@example.com",
        "address": "45, Green Park, Saket, New Delhi",
        "aadharCardNumber": 890123456789,
        "password": "nehaSecure456"
    },
    {
        "name": "Rahul Verma",
        "age": 34,
        "mobile": "9988776655",
        "email": "rahul.verma@example.com",
        "address": "78, Lake View Road, Banjara Hills, Hyderabad",
        "aadharCardNumber": 901234567890,
        "password": "rahulAdmin789",
        "role": "admin"
    },
    {
        "name": "Anjali Desai",
        "age": 24,
        "mobile": "9876501234",
        "email": "anjali.desai@example.com",
        "address": "23, Palm Street, Viman Nagar, Pune",
        "aadharCardNumber": 112233445566,
        "password": "anjaliPass321"
    },
    {
        "name": "Vikram Reddy",
        "age": 38,
        "mobile": "9765432101",
        "email": "vikram.reddy@example.com",
        "address": "56, MG Road, Indiranagar, Bangalore",
        "aadharCardNumber": 223344556677,
        "password": "vikramSecure654"
    },
    {
        "name": "Pooja Nair",
        "age": 31,
        "mobile": "9654321098",
        "email": "pooja.nair@example.com",
        "address": "89, Hill Top Colony, Kowdiar, Thiruvananthapuram",
        "aadharCardNumber": 334455667788,
        "password": "poojaPass987"
    }
]



//DUMMY CANDIDATE DATA FORMAT


[
    {
        "name": "Amit Shah",
        "party": "BJP",
        "age": 59
    },
    {
        "name": "Priyanka Gandhi",
        "party": "INC",
        "age": 52
    },
    {
        "name": "Bhagwant Mann",
        "party": "AAP",
        "age": 50
    },
    {
        "name": "Uddhav Thackeray",
        "party": "Shiv Sena (UBT)",
        "age": 63
    },
    {
        "name": "K. Chandrashekar Rao",
        "party": "BRS",
        "age": 70
    }
]


// SAMPLE CANDIDATE DATA STORAGE FORMAT FOR CANDIDATE (MINGODB)


candidate = {
    name: "Priyanka Gandhi",
    party: "INC",
    age: 52,
    votes: [
        {
            user: "631b92341a7c5d003b6e6ab1",
            votedAt: new Date("2024-04-05T11:10:00.000Z")
        },
        {
            user: "631b92451a7c5d003b6e6ab3",
            votedAt: new Date("2024-04-05T11:22:00.000Z")
        },
        {
            user: "631b92561a7c5d003b6e6ab5",
            votedAt: new Date("2024-04-05T11:40:00.000Z")
        },
        {
            user: "631b92671a7c5d003b6e6ab7",
            votedAt: new Date("2024-04-05T12:05:00.000Z")
        }
    ],
    voteCount: 4
};


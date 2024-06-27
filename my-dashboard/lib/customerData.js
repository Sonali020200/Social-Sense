const customersData = [
  {
    name: "John Doe",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "john.doe@example.com",
    age: 28,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1001",
        dateOfBill: "2024-01-15",
        amount: 250.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1006",
        dateOfBill: "2024-05-10",
        amount: 300.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1011",
        dateOfBill: "2024-09-18",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1016",
        dateOfBill: "2024-12-05",
        amount: 350.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Jane Smith",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "jane.smith@example.com",
    age: 34,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1002",
        dateOfBill: "2024-02-20",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1007",
        dateOfBill: "2024-06-15",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1012",
        dateOfBill: "2024-10-22",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Robert Johnson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "robert.johnson@example.com",
    age: 42,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1003",
        dateOfBill: "2024-03-10",
        amount: 150.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1008",
        dateOfBill: "2024-07-08",
        amount: 200.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1013",
        dateOfBill: "2024-11-12",
        amount: 450.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Emily Davis",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "emily.davis@example.com",
    age: 29,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1004",
        dateOfBill: "2024-04-05",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1009",
        dateOfBill: "2024-08-20",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1014",
        dateOfBill: "2024-12-01",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Michael Brown",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "michael.brown@example.com",
    age: 37,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1005",
        dateOfBill: "2024-05-22",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1010",
        dateOfBill: "2024-09-05",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1015",
        dateOfBill: "2024-11-25",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sarah Johnson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "sarah.johnson@example.com",
    age: 39,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1017",
        dateOfBill: "2024-01-08",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1022",
        dateOfBill: "2024-06-20",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1027",
        dateOfBill: "2024-10-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Alexandra Brown",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "alexandra.brown@example.com",
    age: 31,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1018",
        dateOfBill: "2024-02-12",
        amount: 200.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1023",
        dateOfBill: "2024-07-30",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1028",
        dateOfBill: "2024-11-08",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "David Smith",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "david.smith@example.com",
    age: 33,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1019",
        dateOfBill: "2024-03-25",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1024",
        dateOfBill: "2024-08-12",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1029",
        dateOfBill: "2024-12-18",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sophia Taylor",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "sophia.taylor@example.com",
    age: 27,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1020",
        dateOfBill: "2024-04-18",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1025",
        dateOfBill: "2024-09-30",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1030",
        dateOfBill: "2024-12-27",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "William Adams",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "william.adams@example.com",
    age: 36,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1021",
        dateOfBill: "2024-05-10",
        amount: 180.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1026",
        dateOfBill: "2024-10-18",
        amount: 220.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1031",
        dateOfBill: "2024-11-30",
        amount: 400.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Michael Johnson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "michael.johnson@example.com",
    age: 30,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1001",
        dateOfBill: "2024-01-20",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1006",
        dateOfBill: "2024-05-12",
        amount: 320.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1011",
        dateOfBill: "2024-09-25",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1016",
        dateOfBill: "2024-12-10",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sophie Anderson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "sophie.anderson@example.com",
    age: 32,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1002",
        dateOfBill: "2024-02-22",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1007",
        dateOfBill: "2024-06-18",
        amount: 390.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1012",
        dateOfBill: "2024-10-28",
        amount: 520.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Oliver Brown",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "oliver.brown@example.com",
    age: 35,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1003",
        dateOfBill: "2024-03-15",
        amount: 300.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1008",
        dateOfBill: "2024-07-10",
        amount: 280.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1013",
        dateOfBill: "2024-11-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Isabella Martinez",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "isabella.martinez@example.com",
    age: 28,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1004",
        dateOfBill: "2024-04-10",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1009",
        dateOfBill: "2024-08-22",
        amount: 320.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1014",
        dateOfBill: "2024-12-05",
        amount: 300.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Lucas Miller",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "lucas.miller@example.com",
    age: 31,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1005",
        dateOfBill: "2024-05-05",
        amount: 350.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1010",
        dateOfBill: "2024-09-15",
        amount: 420.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1015",
        dateOfBill: "2024-11-30",
        amount: 390.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "William Turner",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "william.turner@example.com",
    age: 50,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1001",
        dateOfBill: "2024-01-15",
        amount: 250.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1006",
        dateOfBill: "2024-05-10",
        amount: 300.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1011",
        dateOfBill: "2024-09-18",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1016",
        dateOfBill: "2024-12-05",
        amount: 350.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Elizabeth Turner",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "elizabeth.turner@example.com",
    age: 45,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1002",
        dateOfBill: "2024-02-20",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1007",
        dateOfBill: "2024-06-15",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1012",
        dateOfBill: "2024-10-22",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "James Smith",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "james.smith@example.com",
    age: 30,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1003",
        dateOfBill: "2024-03-10",
        amount: 150.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1008",
        dateOfBill: "2024-07-08",
        amount: 200.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1013",
        dateOfBill: "2024-11-12",
        amount: 450.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Emma Johnson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "emma.johnson@example.com",
    age: 28,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1004",
        dateOfBill: "2024-04-05",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1009",
        dateOfBill: "2024-08-20",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1014",
        dateOfBill: "2024-12-01",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Matthew Brown",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "matthew.brown@example.com",
    age: 35,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1005",
        dateOfBill: "2024-05-22",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1010",
        dateOfBill: "2024-09-05",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1015",
        dateOfBill: "2024-11-25",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Olivia Johnson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "olivia.johnson@example.com",
    age: 20,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1017",
        dateOfBill: "2024-01-08",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1022",
        dateOfBill: "2024-06-20",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1027",
        dateOfBill: "2024-10-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Lucas Anderson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "lucas.anderson@example.com",
    age: 32,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1018",
        dateOfBill: "2024-02-12",
        amount: 200.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1023",
        dateOfBill: "2024-07-30",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1028",
        dateOfBill: "2024-11-08",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sophie Davis",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "sophie.davis@example.com",
    age: 25,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1019",
        dateOfBill: "2024-03-25",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1024",
        dateOfBill: "2024-08-12",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1029",
        dateOfBill: "2024-12-18",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sophia Miller",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "sophia.miller@example.com",
    age: 27,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1020",
        dateOfBill: "2024-04-18",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1025",
        dateOfBill: "2024-09-30",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1030",
        dateOfBill: "2024-12-27",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Alexander Brown",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "alexander.brown@example.com",
    age: 40,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1021",
        dateOfBill: "2024-05-10",
        amount: 180.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1026",
        dateOfBill: "2024-10-18",
        amount: 220.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1031",
        dateOfBill: "2024-11-30",
        amount: 400.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Isabella Taylor",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "isabella.taylor@example.com",
    age: 22,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1032",
        dateOfBill: "2024-06-10",
        amount: 150.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1037",
        dateOfBill: "2024-09-08",
        amount: 200.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1042",
        dateOfBill: "2024-12-12",
        amount: 450.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Ethan Wilson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "ethan.wilson@example.com",
    age: 24,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1033",
        dateOfBill: "2024-07-05",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1038",
        dateOfBill: "2024-10-20",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1043",
        dateOfBill: "2024-12-30",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Ava Anderson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "ava.anderson@example.com",
    age: 26,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1034",
        dateOfBill: "2024-08-15",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1039",
        dateOfBill: "2024-11-05",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1044",
        dateOfBill: "2024-12-25",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Jacob White",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "jacob.white@example.com",
    age: 23,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1035",
        dateOfBill: "2024-09-18",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1040",
        dateOfBill: "2024-11-20",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1045",
        dateOfBill: "2024-12-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Charlotte Harris",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "charlotte.harris@example.com",
    age: 21,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1036",
        dateOfBill: "2024-10-12",
        amount: 200.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1041",
        dateOfBill: "2024-12-28",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1046",
        dateOfBill: "2024-12-10",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Mia Wilson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "mia.wilson@example.com",
    age: 29,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1047",
        dateOfBill: "2024-01-20",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1052",
        dateOfBill: "2024-05-12",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1057",
        dateOfBill: "2024-11-08",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Jack Brown",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "jack.brown@example.com",
    age: 31,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1048",
        dateOfBill: "2024-02-05",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1053",
        dateOfBill: "2024-06-20",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1058",
        dateOfBill: "2024-12-27",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Emily Davis",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "emily.davis@example.com",
    age: 33,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1049",
        dateOfBill: "2024-03-18",
        amount: 180.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1054",
        dateOfBill: "2024-07-10",
        amount: 220.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1059",
        dateOfBill: "2024-11-30",
        amount: 400.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Michael Johnson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "michael.johnson@example.com",
    age: 47,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1050",
        dateOfBill: "2024-04-15",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1055",
        dateOfBill: "2024-08-20",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1060",
        dateOfBill: "2024-12-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Olivia Miller",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "olivia.miller@example.com",
    age: 26,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1051",
        dateOfBill: "2024-05-12",
        amount: 200.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1056",
        dateOfBill: "2024-09-30",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1061",
        dateOfBill: "2024-11-08",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Ella Harris",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "ella.harris@example.com",
    age: 24,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1062",
        dateOfBill: "2024-06-10",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1067",
        dateOfBill: "2024-09-08",
        amount: 450.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1072",
        dateOfBill: "2024-12-12",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Benjamin Wilson",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "benjamin.wilson@example.com",
    age: 48,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1063",
        dateOfBill: "2024-07-05",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1068",
        dateOfBill: "2024-10-20",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1073",
        dateOfBill: "2024-12-30",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "William Moore",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "william.moore@example.com",
    age: 49,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1064",
        dateOfBill: "2024-08-15",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1069",
        dateOfBill: "2024-11-05",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1074",
        dateOfBill: "2024-12-25",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sophia Brown",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "sophia.brown@example.com",
    age: 46,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1065",
        dateOfBill: "2024-09-18",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1070",
        dateOfBill: "2024-11-20",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1075",
        dateOfBill: "2024-12-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Amelia Martin",
    profile: "https://picsum.photos/200/300",
    avatar: "https://picsum.photos/200/300",
    email: "amelia.martin@example.com",
    age: 27,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1066",
        dateOfBill: "2024-10-12",
        amount: 200.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1071",
        dateOfBill: "2024-12-28",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1076",
        dateOfBill: "2024-12-10",
        amount: 600.00,
        status: "Pending"
      }
    ]
  }
];




export default customersData;
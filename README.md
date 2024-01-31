# Library Management System Console App

## Overview

This console application serves as a Library Management System, offering CRUD (Create, Read, Update, Delete) operations for user and book information. The essential details collected for each user include:

- Customer's Name
- Address
- Contact Number
- Book ID
- Borrowed Date
- Book Return Date (automatically updated as the Borrowed Date + 14 days)

## Installation

Ensure you have Node.js installed on your machine. Clone this repository and navigate to the project directory in your terminal. Run the following command to install the necessary dependencies:

```bash
npm install
```

## Usage

### 1. Adding a New Borrower

To add a new borrower, run the following command:

```bash
node app.js add
```

You will be prompted to enter the borrower details, including name, address, contact number, book ID, and borrowed date.

### 2. Updating Borrower Information

To update borrower information, run the following command:

```bash
node app.js update <borrower_id>
```

Replace `<borrower_id>` with the actual ID of the borrower you want to update. You will be prompted to enter the updated details.

### 3. Deleting a Borrower

To delete a borrower, run the following command:

```bash
node app.js delete <borrower_id>
```

Replace `<borrower_id>` with the ID of the borrower you want to delete.

### 4. Reading Borrower Details

To read the details of a specific borrower or view the entire borrower list, run the following command:

```bash
node app.js read [borrower_id]
```

Replace `[borrower_id]` with the ID of the borrower you want to view. If no ID is provided, the application will display the details of all borrowers.

## Example

```bash
# Add a new borrower
node app.js add

# Update borrower details
node app.js update 1

# Delete a borrower
node app.js delete 2

# Read borrower details
node app.js read
```

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Add employees">
		<meta name="author" content="Sumit Jawale">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" href="./images/favicon.ico" type="image/ico" sizes="16x16" />
		<title>Employee Addition</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	</head>
	<body>
		<script src="func.js"></script>
		<section>
			<form id="form" method="post" action="">
				<fieldset>
					<legend>Add an Employee</legend>
					<label for="first_name">First Name</label><br/><input type="text" name="first_name" id="first_name" required /><br/>
					<label for="last_name">Last Name</label><br/><input type="text" name="last_name" id="last_name" required /><br/>
					<label for="department">Department</label><br/>
						<select name="department" id="department" required>
							<option value="Engineering">Engineering</option>
							<option value="Management">Management</option>
							<option value="Arts">Arts</option>
						</select>
						<br/>
						<br/>
					<input type="submit" id="submit_btn" value="Submit &rarr;" ></input>
				</fieldset>
			</form>
            <div id="output_div"></div>
			<div>
				<img id="browser_img" src="" />&nbsp;<span id="browser_name" />
			</div>
		</section>
	</body>
</html>

import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper,  } from '@material-ui/core';
import ShowList from "./ShowList";
import axios from 'axios'
import FetchData from './others/handler/FetchData';
import { green, orange } from '@material-ui/core/colors'
import  Button  from './others/material-component/controls/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		color: orange,
		flexGrow: 3,
		backgroundColor: green
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.primary.main,
	},
	word: { 
		padding: '50px', 
		textAlign: 'center', 
		backgroundColor: '#46282d', 
		color: 'white', 
	},
}));


function EntryForm() {

	const classes = useStyles();
	const [initState, setState] = useState({});

	const handleEnglishwordChange = event => {
		setState({...initState, english_word : event.target.value})
	}

	const handleBengalimeaningsChange = event => {
		setState({...initState, bengali_meanings: event.target.value })
		// add tag in a object...
	}

	// handleTopicChange = event => {
	// 	this.setState({
	// 		topic: event.target.value
	// 	})
	// }

	const handleSubmit = event => {
		console.log(`IIIISSS: ${JSON.stringify(initState)}`);
		axios.post('http://localhost:5000/api/words', {
			...initState
		  })
		  .then(function (response) {
			console.log(JSON.stringify(response));
		  })
		  .catch(function (error) {
			console.log(JSON.stringify(error));
		  });
		event.preventDefault()
	}

	// useEffect(() => {
	// 	console.log("IIII:::"+initState);
	// }, [initState])
	
	const theme = useTheme();
	console.log(`usetheme::: ${JSON.stringify(theme)}`);

	const { english_word, bengali_meanings } = initState
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						xs=12 sm=6 
						<form onSubmit={handleSubmit}>
							<div>
								<label>English Word </label>
								<input
									type="text"
									value={english_word}
									onChange={handleEnglishwordChange}
								/>
							</div>
							<div>
								<label>Bengali Meanings</label>
								<textarea
									value={bengali_meanings}
									onChange={handleBengalimeaningsChange}
								/>
							</div>
							<Button variant="contained" color="primary" type="submit">Submit</Button>
						</form>
						</Paper>
				</Grid>
				{/* <Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						xs=12 sm=6
						<div  className={classes.word}>
							<ShowList/>
							<FetchData/>
						</div>
					</Paper>
				</Grid> */}

			</Grid>
		</div>
	)
}

// export default EntryForm

export default EntryForm

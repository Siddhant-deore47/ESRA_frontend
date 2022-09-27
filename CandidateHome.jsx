import UserNavbar from '../../Components/UserNavbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import Header from '../../Components/Header';
import axios from 'axios';

const CandidateHome = () => {

	const [loading, setLoading] = useState(true);

	const candidateNavLinks = [
		{ "linkUrl": "/candidate", "linkName": "Home", "classNames": "active" },
		{ "linkUrl": "/candidate/profile", "linkName": "Profile", "classNames": "" },
		{ "linkUrl": "/candidate/quiz-history", "linkName": "Quiz History", "classNames": "" },
		{ "linkUrl": "/candidate/quiz", "linkName": "Take Quiz", "classNames": "" }
	]

	const navigate = useNavigate()

	const [candidateData, setCandidateData] = useState({})

	useEffect(() => {
		if (localStorage.getItem("token") == null)
			navigate('/')
		else {
			setLoading(true)
			loadUserDetails();
			getCandidateDetails();
			setTimeout(() => {
				setLoading(false);
			}, 800);
		}
	}, []);

	const config = {
		headers: {
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	}

	const loadUserDetails = () => {
		axios
			.get(`http://localhost:8080/current-user`, config)
			.then((response) => {
			})
			.catch((error) => {
				console.log(error)
				alert("Token invalid, you've been logged out!")
				navigate('/')
			});
	};

	const getCandidateDetails = () => {
		axios
			.get(`http://localhost:8080/candidate/get-details`, config)
			.then((response) => {
				setCandidateData(response.data)
			})
			.catch((error) => {
				console.log(error)
			});
	}

	return <>
		<UserNavbar navLinks={candidateNavLinks} />
		{loading ? (
			<div className="d-flex justify-content-center align-items-center position-fixed w-100 h-75">
				<PropagateLoader color="#3643a3" loading={loading} size={50} />
			</div>
		) : (
			<>
				<Header title={"Welcome " + candidateData.candidateName + "!"} />
				<div>
					This is CandidateHome
				</div>
			</>)}
	</>
}

export default CandidateHome;
// import React from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './App.css';

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
	password: string;
	confirmPassword: string;
};

const App = () => {
	const schema: ZodType<FormData> = z
		.object({
			firstName: z.string().min(2).max(30),
			lastName: z.string().min(2).max(30),
			email: z.string().email(),
			age: z.number().min(18).max(70),
			password: z.string().min(5).max(20),
			confirmPassword: z.string().min(5).max(20),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Passwords do not match',
			path: ['confirmPassword'],
		});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const submitData = (data: FormData) => {
		console.log('IT WORKED', data);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit(submitData)}>
				<div>
					<label>First Name: </label>
					<input type="text" {...register('firstName')} />
					<div>
						{errors.firstName && <span>{errors.firstName.message}</span>}
					</div>
				</div>
				<div>
					<label>Last Name: </label>
					<input type="text" {...register('lastName')} />
				</div>
				<div>
					<label>Email: </label>
					<input type="text" {...register('email')} />
				</div>
				<div>
					<label>Age: </label>
					<input type="number" {...register('age', { valueAsNumber: true })} />
				</div>
				<div>
					<label>Password: </label>
					<input type="password" {...register('password')} />
				</div>
				<div>
					<label>Confirm Password: </label>
					<input type="password" {...register('confirmPassword')} />
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default App;

import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <section className='w-full flex-col'>
            <h1 className='head_text font-bold text-black flex text-4xl sm:text-flex justify-center'>
                <Link href={"/studymaterial/S3"}><div className='underline'>Semester 3 : Notes : Discrete Mathematical Structures</div></Link>
            </h1>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 1:- Fundamentals of Logic</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Mathematical logic - Basic connectives and truth table, Statements, Logical Connectives, Tautology, Contradiction</li>
                        <li>Logical Equivalence - The Laws of Logic, The Principle of duality, Substitution Rules. The implication - The Contrapositive, The Converse,The Inverse</li>
                        <li>Logical Implication - Rules of Inference</li>
                        <li>The use of Quantifiers - Open Statement</li>
                        <li>Logically Equivalent - Contrapositive, Converse, Inverse</li>
                        <li>Logical equivalences and implications for quantified statement, Implications, Negation</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/19-CGjgL2ZtNnbkSOBeBrSHGa7d6IJMkd/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 2:- Fundamentals of Counting Theory</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>The Rule of Sum – Extension of Sum Rule</li>
                        <li>The Rule of Product - Extension of Product Rule</li>
                        <li>Permutations</li>
                        <li>Combinations</li>
                        <li>The Binomial Theorem (without proof)</li>
                        <li>Combination with Repetition</li>
                        <li>The Pigeon hole Principle</li>
                        <li>The Principle of Inclusion and Exclusion Theorem (Without Proof) - Generalization of the Principle</li>
                        <li>Derangements</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1AR0VjIeH0FJYthIY9BN9cQAPJqwtCodD/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 3:- Relations and Functions</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Cartesian Product - Binary Relation</li>
                        <li>Function – domain, range-one to one function, Image- restriction</li>
                        <li>Properties of Relations- Reachability Relations, Reflexive Relations, Symmetric Relations, Transitive relations, Anti-symmetric Relations, Partial Order relations, Equivalence Relations, Irreflexive relations</li>
                        <li>Partially ordered Set – Hasse Diagram, Maximal-Minimal Element, Least upper bound (lub), Greatest Lower bound(glb) (Topological sorting Algorithm- excluded)</li>
                        <li>Equivalence Relations</li>
                        <li>Partitions - Equivalence Class</li>
                        <li>Lattice - Dual Lattice, Sub lattice, Properties of glb and lub, Properties of Lattice, Special Lattice, Complete Lattice, Bounded Lattice, Completed Lattice, Distributive Lattice</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1VfuL1IGi8xYE8ibILEu6k_W1s7M77940/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 4:- Generating Functions and Recurrence Relations</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Generating Function - Definition and Examples, Calculation techniques, Exponential generating function</li>
                        <li>First-order linear recurrence relations with constant coefficients - homogeneous, non-homogeneous Solution</li>
                        <li>Second-order linear recurrence relations with constant coefficients, homogeneous, non-homogeneous Solution</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1aJsomLdY7x48Ez3x7ZQWWTl675_mTdkC/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 5:- Algebraic Structures</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Algebraic system-properties- Homomorphism and Isomorphism</li>
                        <li>Semigroup and monoid - cyclic monoid, sub semigroup and sub monoid, Homomorphism and Isomorphism of Semigroup and monoids</li>
                        <li>Group- Elementary properties, subgroup, the symmetric group on three symbols, The direct product of two groups, Group Homomorphism, Isomorphism of groups, Cyclicgroup</li>
                        <li>Rightcosets - Leftcosets</li>
                        <li>Lagrange's Theorem</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1USggsZPBapwAJU3ew0xEETRdpEVLX8bR/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
        </section>
    )
}

export default page
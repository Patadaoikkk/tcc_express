import styles from './MemberReview.module.css'
import { FaStar } from "react-icons/fa"; <FaStar />
import { FaStarHalfAlt } from "react-icons/fa"; <FaStarHalfAlt />
import { FaRegStar } from "react-icons/fa"; <FaRegStar />

function MemberReview() {
    // Renderiza as estrelas.
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className={styles.member_review_star} />);
        }

        if (halfStar) {
            stars.push(<FaStarHalfAlt key="half" className={styles.member_review_star} />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={i + fullStars + 1} className={styles.member_review_star} />);
        }

        return stars;
    };

    const memberReview = [
        {
            id: 1,
            image: 'src/assets/rebecca_p.png',
            name: 'Beatrice',
            rating: 5,
            date: '2024/06/01',
            message: 'A Dra. Ana é incrível! Ela me ajudou a superar minha ansiedade de uma forma que eu nunca pensei ser possível.'
        },
        {
            id: 2,
            image: 'src/assets/bernardo_p.png',
            name: 'Dmitry',
            rating: 3.5,
            date: '2024/05/28',
            message: 'O tratamento com o Dr. Taddini melhorou significativamente meu desempenho no esporte. Ele é incrível!'
        },
        {
            id: 3,
            image: 'src/assets/martin_p.png',
            name: 'Matteo',
            rating: 2.5,
            date: '2024/05/25',
            message: 'Estou extremamente grato pela orientação da Dra. Vogel em um momento tão desafiador.'
        },
    ];

    return (
        <>
            {/* Review. */}
            <section className={styles.member_review_container}>
                {memberReview.map(review => (
                    <div className={styles.member_review_card} key={review.id}>
                        <div className={styles.member_review_user_image}>
                            {/* <img src={`src/assets/${review.name.toLowerCase()}.png`} alt={review.name} /> */}
                            <img src={review.image} alt={review.name} className={styles.member_review_image} />
                        </div>
                        <div className={styles.member_review_user_info}>
                            <p className={styles.member_review_name}><strong> {review.name}</strong></p>
                            <p className={styles.member_review_text}>
                                <span className={styles.member_review_star}></span>
                                <span>
                                    {renderStars(review.rating)}
                                    <span>{review.rating.toFixed(1)}</span>
                                </span>
                            </p>
                            <p className={styles.member_review_span}> {review.date}</p><br />
                            <p className={styles.member_review_text}> {review.message}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default MemberReview
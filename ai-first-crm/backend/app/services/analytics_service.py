from app.repositories.analytics_repository import *


def get_dashboard_analytics(db):

     return {
        "totalInteractions": get_total_interactions(db),
        "positiveInteractions": get_positive_count(db),
        "neutralInteractions": get_neutral_count(db),
        "negativeInteractions": get_negative_count(db),

        # New metrics
        "brochuresShared": get_brochure_count(db),
        "pendingFollowups": get_followup_count(db),
    }

def get_products(db):

    data = get_product_stats(db)

    return [
        {
            "product": p.product,
            "count": p.count,
        }
        for p in data
    ]


def get_doctors(db):

    data = get_doctor_stats(db)

    return [
        {
            "doctor": d.hcp_name,
            "count": d.count,
        }
        for d in data
    ]


def get_sentiments(db):

    data = get_sentiment_stats(db)

    return [
        {
            "name": s.sentiment,
            "value": s.count,
        }
        for s in data
    ]


def get_monthly(db):

    data = get_monthly_stats(db)

    return [
        {
            "month": m.month,
            "count": m.count,
        }
        for m in data
    ]


def get_ai_insights(db):

    total = get_total_interactions(db)
    positive = get_positive_count(db)
    negative = get_negative_count(db)

    return {
        "total": total,
        "positive": positive,
        "negative": negative,
        "followups": 0,
    }
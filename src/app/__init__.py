from utils.logging import set_up_logger

logger = set_up_logger(logger_name=__name__)


def run() -> int:
    """Main entry point for the application."""
    logger.info("Starting app service...")
    return 0


__title__ = "app"
__description__ = "Contains the app service."

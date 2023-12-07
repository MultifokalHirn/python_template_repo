from python_template_repo.cli import CLI


def test_app():
    a = CLI()
    a.echo("hello world")
    assert True

# sevenrules

Validates a git commit message against [The seven rules](https://chris.beams.io/posts/git-commit/#seven-rules):

1. **Separate subject from body with a blank line**
1. **Limit the subject line to 72 characters**
1. **Capitalize the subject line**
1. **Do not end the subject line with a period**
1. **Use the imperative mood in the subject line**
1. **Wrap the body at 72 characters**
1. Use the body to explain what and why vs. how

The bolded rules 1-6 are checked. The remaining rule 7 is not detectable programmatically.

Rule 5 (Imperative mood) is heuristically checked using a blacklist of terms,
but might give false negatives in some cases. The blacklist is based on [this
git hook](https://github.com/tommarshall/git-good-commit).

The title of [rule 2](https://chris.beams.io/posts/git-commit/#limit-50) says 50
characters but the body clarifies 72 is the hard limit.

A [husky](https://github.com/typicode/husky) hook is provided for ease of use.

Inspired by the [quality Bash implementation](https://gitlab.com/silent.correspondent/commit-msg/blob/master/commit-msg.sh).

## Usage

Install `husky` and `sevenrules`:

```sh
npm install husky @romeovs/sevenrules --save-dev
# or
yarn add husky @romeovs/sevenrules --dev
```

Hook the validator to `commit-msg` in your `package.json`:

```JSON
{
  "husky": {
    "hooks": {
      "commit-msg": "sevenrules"
    }
  }
}
```

Enjoy your clean commit log!

## Example

```sh
$ git commit -m "Updated README.md"
Your commit message breaks of the seven rules of commit messages

  Rule 5: Use the imperative mood in the subject line

For more info on the seven rules, see https://chris.beams.io/posts/git-commit
commit-msg hook failed (add --no-verify to bypass)
```

## Conduct

Respect agency. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Anybody caught using this work without our permission, will be mighty good
friends of ourn, cause we don't give a dern. Study it. Hack it. Publish it, even
without naming the source. We made it, that's all we wanted to do.

Released under [the Severn license](LICENSE), an MIT derivative without the
notice requirement. Contributor signatures available in the
[contributors](https://github.com/severnway/contributors) repository.

NO rights reserved.

import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('backup', () => {
  it('runs backup cmd', async () => {
    const {stdout} = await runCommand('backup')
    expect(stdout).to.contain('hello world')
  })

  it('runs backup --name oclif', async () => {
    const {stdout} = await runCommand('backup --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
